using WebApp.Extensions;
using WebApp.Services;

var builder = WebApplication.CreateBuilder(args);

// Register services
builder.Services.AddSingleton<ContactFormService>();

var app = builder.Build();

// Configure middleware pipeline
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();
app.UseRouting();

// Map all routes using extension methods
app.MapStaticPages();
app.MapContactForm();

app.Run();
