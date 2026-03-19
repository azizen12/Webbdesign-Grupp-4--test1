# ASP.NET Core Web Application - Webbdesign Grupp 4

## Project Structure

This is a minimal ASP.NET Core application that demonstrates backend functionality with the following features:

### Features Implemented

✅ **Minimal ASP.NET Core Application**
- Built using .NET 8.0
- Uses minimal API approach with Program.cs

✅ **Static Files Serving**
- HTML files (index.html, contact.html)
- CSS stylesheets (style.css)
- JavaScript files (main.js)

✅ **HTTP POST Form**
- Contact form with name, email, and message fields
- Form submits data via HTTP POST to `/contact`

✅ **Server-Side Processing**
- Processes form data on the server
- Validates required fields
- Validates email format

✅ **Dynamic HTML Response**
- Server generates HTML response dynamically
- Shows success message with submitted data
- Shows error messages for validation failures

✅ **Server-Side Validation**
- Required field validation (name, email, message)
- Email format validation
- Error messages displayed to user

## Project Structure

```
WebApp/
├── Program.cs                      # Main application entry point (clean & minimal)
├── WebApp.csproj                   # Project file
├── appsettings.json                # Application configuration
├── appsettings.Development.json    # Development configuration
├── Extensions/                     # Route extension methods
│   ├── RouteExtensions.cs          # Static page routes
│   └── ContactRouteExtensions.cs   # Contact form routes
├── Services/                       # Business logic services
│   └── ContactFormService.cs       # Form validation & HTML generation
├── Properties/
│   └── launchSettings.json         # Launch profiles
└── wwwroot/                        # Static files directory
    ├── index.html                  # Home page
    ├── season.html                 # Season page
    ├── plantlist.html              # Plant list page
    ├── aboutus.html                # About us page
    ├── contact.html                # Contact form page
    ├── components/                 # Web Components
    │   ├── site-header.js/css
    │   ├── site-nav.js/css
    │   └── site-footer.js/css
    ├── pages/                      # Page-specific styles
    │   ├── home.css
    │   ├── season.css
    │   ├── plantlist.css
    │   └── aboutus.css
    ├── css/
    │   └── style.css               # Global stylesheet
    ├── js/
    │   └── main.js                 # JavaScript file
    ├── utils/
    │   └── dom.js                  # DOM helper utilities
    └── img/                        # Images
        ├── image1.png
        └── image2.jpg
```

## How to Run

### Prerequisites
- .NET 8.0 SDK installed
- Visual Studio 2022 or Visual Studio Code

### Running the Application

1. **Using Visual Studio:**
   - Open the solution in Visual Studio
   - Set `WebApp` as the startup project
   - Press F5 or click Run

2. **Using Command Line:**
   ```bash
   cd WebApp
   dotnet run
   ```

3. **Access the application:**
   - HTTP: http://localhost:5000
   - HTTPS: https://localhost:5001

## Application Routes

- `GET /` - Home page (plant cultivation welcome)
- `GET /season` - Seasonal plants information
- `GET /plantlist` - Plant catalogue (coming soon)
- `GET /aboutus` - About us page
- `GET /contact` - Contact form page
- `POST /contact` - Form submission endpoint (handles validation and returns dynamic HTML)

## Features Demo

### 1. Home Page
Visit http://localhost:5000 to see the home page with navigation and feature overview.

### 2. Contact Form
Navigate to http://localhost:5000/contact to access the contact form.

### 3. Form Submission
Fill out the form and submit. The server will:
- Validate all required fields
- Check email format
- Return a dynamic HTML response with either:
  - Success message with submitted data
  - Error messages for validation failures

### 4. Static Files
All CSS and JavaScript files are served automatically from the `wwwroot` directory.

## Server-Side Validation

The application validates:
- **Name**: Required field
- **Email**: Required field and must contain "@"
- **Message**: Required field

If validation fails, the server returns a dynamic HTML page listing all errors with a link to go back to the form.

If validation succeeds, the server returns a success page displaying the submitted data.

## Code Structure

### Program.cs
Contains the minimal API setup with clean, organized code:
- Service registration
- Middleware configuration
- Route mapping using extension methods

### Extensions/
Extension methods for organizing routes:
- **RouteExtensions.cs**: Maps all static page GET routes
- **ContactRouteExtensions.cs**: Maps contact form POST endpoint

### Services/
Business logic separated from routing:
- **ContactFormService.cs**: Handles form validation and HTML generation

### wwwroot/
Contains all static files that are served directly to the browser:
- HTML pages
- CSS stylesheets
- JavaScript files
- Web Components
- Images

## Customization

### Adding New Routes
Edit `Program.cs` and add new `MapGet` or `MapPost` endpoints:

```csharp
app.MapGet("/about", async context =>
{
    await context.Response.SendFileAsync("wwwroot/about.html");
});
```

### Modifying Styles
Edit `wwwroot/css/style.css` to change the appearance of the website.

### Adding JavaScript Functionality
Edit `wwwroot/js/main.js` to add client-side functionality.

## Technologies Used

- **ASP.NET Core 8.0** - Web framework
- **C#** - Programming language
- **HTML5** - Markup
- **CSS3** - Styling
- **JavaScript** - Client-side functionality

## Notes

This is a minimal implementation designed for educational purposes. For production applications, consider:
- Using a view engine (Razor Pages or MVC)
- Implementing proper data persistence
- Adding more comprehensive validation
- Implementing proper error handling
- Adding logging
- Using a database for storing form submissions
