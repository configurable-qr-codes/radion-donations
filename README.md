# README.md for Radion Donations Redirect Configuration

## Overview

The Radion Donations repository is designed to manage redirects for specific URLs. 
While it doesn't directly handle QR codes, it enables a powerful feature where QR codes can be generated for the configured redirects. 
By doing so, you can change the URL a QR code leads to without altering the QR code itself.

This functionality is particularly useful when you need to update the destination of a QR code without having to regenerate and redistribute the physical QR code. 
You simply update the corresponding URL in the configuration file, and the existing QR code will redirect to the new URL.

## Adding a Redirect URL

1. **Edit the `config.json` file**: Add a new redirect URL using this pattern:

   ```json
   {
     "urls": {
       "unique-name": {
         "url": "https://website.com"
       }
     }
   }
   ```

   Replace `"unique-name"` with an identifier for the redirect, and `"https://website.com"` with the URL you want the redirect to lead to.

2. **Validate the Configuration**: Run the `validate-config` npm script to ensure that the `config.json` file is correct. If the configuration is valid, a message saying `config.json file is valid!` will be displayed.

### Redirect URL Format

When editing the `config.json` file, the final link that the redirect should refer to will look like this:

```
https://configurable-qr-codes.github.io/radion-donations?id=unique-name
```

Replace `unique-name` with the ID of the link where the redirection should take place.

## Deploying to GitHub Pages

The deployment process to GitHub Pages is automated through a GitHub Actions workflow. Here's an overview:

1. **Trigger**: The workflow is triggered by a push to the main branch.

2. **Validation**: The `config.json` file is validated using the `validate-config` npm script. If validation fails, an issue is created on GitHub with error details.

3. **Deployment**: If validation is successful, the changes are deployed to the `gh-pages` branch, making them live on GitHub Pages.

This process ensures that the configuration is correct and automates the deployment to GitHub Pages.
