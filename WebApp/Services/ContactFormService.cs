namespace WebApp.Services;

public class ContactFormService
{
    /// <summary>
    /// Validates contact form data
    /// </summary>
    public List<string> ValidateForm(string name, string email, string message)
    {
        var errors = new List<string>();

        if (string.IsNullOrWhiteSpace(name))
        {
            errors.Add("Name is required");
        }

        if (string.IsNullOrWhiteSpace(email))
        {
            errors.Add("Email is required");
        }
        else if (!email.Contains("@"))
        {
            errors.Add("Email must be a valid email address");
        }

        if (string.IsNullOrWhiteSpace(message))
        {
            errors.Add("Message is required");
        }

        return errors;
    }

    /// <summary>
    /// Generates HTML response for form submission
    /// </summary>
    public string GenerateResponseHtml(string name, string email, string message, List<string> errors)
    {
        var html = new System.Text.StringBuilder();
        
        html.Append("<!DOCTYPE html>");
        html.Append("<html lang='sv'>");
        html.Append("<head>");
        html.Append("<meta charset='UTF-8'>");
        html.Append("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        html.Append("<title>Form Result - Webbdesign Grupp 4</title>");
        html.Append("<link rel='stylesheet' href='/css/style.css'>");
        html.Append("<script type='module' src='/components/site-header.js'></script>");
        html.Append("<script type='module' src='/components/site-nav.js'></script>");
        html.Append("<script type='module' src='/components/site-footer.js'></script>");
        html.Append("</head>");
        html.Append("<body>");
        html.Append("<site-header></site-header>");
        html.Append("<site-nav></site-nav>");
        html.Append("<main>");
        html.Append("<div class='container'>");

        if (errors.Count > 0)
        {
            html.Append(GenerateErrorHtml(errors));
        }
        else
        {
            html.Append(GenerateSuccessHtml(name, email, message));
        }

        html.Append("</div>");
        html.Append("</main>");
        html.Append("<site-footer></site-footer>");
        html.Append("</body>");
        html.Append("</html>");

        return html.ToString();
    }

    private string GenerateErrorHtml(List<string> errors)
    {
        var html = new System.Text.StringBuilder();
        
        html.Append("<div class='error-box'>");
        html.Append("<h2>Validation Errors</h2>");
        html.Append("<ul>");
        
        foreach (var error in errors)
        {
            html.Append($"<li>{System.Web.HttpUtility.HtmlEncode(error)}</li>");
        }
        
        html.Append("</ul>");
        html.Append("<a href='/contact' class='btn'>Go Back</a>");
        html.Append("</div>");

        return html.ToString();
    }

    private string GenerateSuccessHtml(string name, string email, string message)
    {
        var html = new System.Text.StringBuilder();
        
        html.Append("<div class='success-box'>");
        html.Append("<h2>Thank You!</h2>");
        html.Append("<p>Your message has been received.</p>");
        html.Append("<div class='submitted-data'>");
        html.Append($"<p><strong>Name:</strong> {System.Web.HttpUtility.HtmlEncode(name)}</p>");
        html.Append($"<p><strong>Email:</strong> {System.Web.HttpUtility.HtmlEncode(email)}</p>");
        html.Append($"<p><strong>Message:</strong> {System.Web.HttpUtility.HtmlEncode(message)}</p>");
        html.Append("</div>");
        html.Append("<a href='/' class='btn'>Back to Home</a>");
        html.Append("</div>");

        return html.ToString();
    }
}
