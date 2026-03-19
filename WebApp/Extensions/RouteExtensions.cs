namespace WebApp.Extensions;

public static class RouteExtensions
{
    /// <summary>
    /// Maps all static page routes for the application
    /// </summary>
    public static IEndpointRouteBuilder MapStaticPages(this IEndpointRouteBuilder app)
    {
        app.MapGet("/", async context =>
        {
            context.Response.ContentType = "text/html";
            await context.Response.SendFileAsync("wwwroot/index.html");
        });

        app.MapGet("/season", async context =>
        {
            context.Response.ContentType = "text/html";
            await context.Response.SendFileAsync("wwwroot/season.html");
        });

        app.MapGet("/plantlist", async context =>
        {
            context.Response.ContentType = "text/html";
            await context.Response.SendFileAsync("wwwroot/plantlist.html");
        });

        app.MapGet("/aboutus", async context =>
        {
            context.Response.ContentType = "text/html";
            await context.Response.SendFileAsync("wwwroot/aboutus.html");
        });

        app.MapGet("/contact", async context =>
        {
            context.Response.ContentType = "text/html";
            await context.Response.SendFileAsync("wwwroot/contact.html");
        });

        return app;
    }
}
