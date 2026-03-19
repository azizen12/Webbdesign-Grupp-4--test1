using WebApp.Services;

namespace WebApp.Extensions;

public static class ContactRouteExtensions
{
    /// <summary>
    /// Maps the contact form POST endpoint
    /// </summary>
    public static IEndpointRouteBuilder MapContactForm(this IEndpointRouteBuilder app)
    {
        app.MapPost("/contact", async (HttpContext context, ContactFormService formService) =>
        {
            var form = await context.Request.ReadFormAsync();

            var name = form["name"].ToString();
            var email = form["email"].ToString();
            var message = form["message"].ToString();

            // Server-side validation
            var errors = formService.ValidateForm(name, email, message);

            // Generate dynamic HTML response
            context.Response.ContentType = "text/html";
            var html = formService.GenerateResponseHtml(name, email, message, errors);
            
            await context.Response.WriteAsync(html);
        });

        return app;
    }
}
