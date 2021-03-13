# pwatools
pwatools is a JavaScript library that depends on jQuery and Bootstrap to craft Progressive Web Apps, also called PWAs. Progressive Web Apps integrate into your homescreen like a real app. This library tries to target iOS and Android. You can't use this library on an already existing page, but you can quickly build a PWA using this library. Examples are provided in this README.

## Demo

I built a simple demo page to demonstrate pwatools.\
All functions of this library are explained on the demo page as well.

The demo can be added to your homescreen and it should behave like an app.

You can find it here: [https://pwatools.discord.digital/](https://pwatools.discord.digital)

It is worth mentioning that you need a webserver to run this.\
Running this locally will fail because the page loading uses AJAX and access to local files is not allowed.\
PHP is **not** required to run this.

### Screenshot

![Comparison between developer mode and real phone](https://pwatools.discord.digital/cdn/example.png)

## About Icons

This demonstration of the library uses [Ionicons](https://ionicons.com/).\
However, any icon library should work.

## Usage

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <link rel="stylesheet" href="assets/bootstrap/css/bootstrap.min.css">
    <link rel="manifest" href="manifest.json">
    <link rel="stylesheet" href="assets/fonts/ionicons.min.css">
    <link rel="stylesheet" href="assets/css/pwatools.css">
    <link rel="stylesheet" href="assets/css/style.css">
</head>

<body>
    <script src="assets/js/jquery.min.js"></script>
    <script src="assets/bootstrap/js/bootstrap.min.js"></script>
    <script src="assets/js/pwatools.js"></script>
    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
    <script src="assets/js/main.js"></script>
</body>

</html>
```

This example shows an HTML page that includes local files to Bootstrap and JQuery.\
Once you've linked them you can also link pwatools.js.

The order for linking these scripts are relevant, link pwatools.js after JQuery and Bootstrap.

Then you specify a script that will utilize the pwatools library.\
In this case the script is called main.js

```javascript
function loadPage() {
    // Return navigation objects
    var home = pwatools.getNavItem("Hub", "/hub.html", pwatools.getIoniconsIcon("bookmark-outline"), true, pwatools.getIoniconsIcon("bookmark"))

    var about = pwatools.getNavItem("About", "/about.html", pwatools.getIoniconsIcon("help-circle-outline"), false, pwatools.getIoniconsIcon("help-circle"))

    var github = pwatools.getExternalNavItem("Github", "https://github.com/DiscordDigital", pwatools.getIoniconsIcon("logo-github"))

    // Combine navigation objects (The order is important)
    var navigation = home + about + github

    // initPage: function(appIconUrl, pageName, navigationItems, startPage)
    pwatools.initPage("/appIcon.png", "DiscordDigital", navigation, "/hub.html")
    
    // On Desktop you can run following function to enable a developer view for the page:
    // pwatools.emulatePhone()
}
loadPage()
```

The content is being loaded from plain HTML files.

Scripts can also be loaded from there if required.

A page can look like this:

```html
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
</head>

<body>
    <h2>Example page</h2>
    <p>Welcome to my example page</p>
</body>

</html>
```

For the PWA integration on your homescreens you need to create a file named manifest.json\
Save it on your web root and include it like on the HTML example shown on top of this README.

You can also link your homescreen icon from there.\
The homescreen icon linked in your manifest.json will be shown on Android devices.\
For iOS you can use the "pwatools.setPageIcon(url)" function.

```json
{
  "name": "pwatools demo",
  "short_name": "pwatools demo",
  "start_url": "/index.html",
  "display": "standalone",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "Logo.png",
      "sizes": "460x460",
      "type": "image/png"
    }
  ]
}
```
