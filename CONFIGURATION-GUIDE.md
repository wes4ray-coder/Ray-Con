# Ray Construction Website Configuration Guide

This guide explains how to configure and edit the Ray Construction website, including managing pictures and quote notifications.

## 📸 Managing Pictures

### Image Directory Structure
The website uses the following image organization:
```
images/
├── hero/
│   └── construction-site.jpg        # Main hero section image
├── services/
│   ├── house-pad.jpg               # House pad service image
│   ├── shed-pad.jpg                # Shed pad service image
│   └── pond-excavation.jpg         # Pond excavation service image
├── about/
│   └── team-equipment.jpg          # About section team/equipment photo
└── gallery/
    ├── house-pad-before-after.jpg  # Gallery image 1
    ├── shed-foundation-completed.jpg # Gallery image 2
    ├── pond-excavation-project.jpg # Gallery image 3
    ├── site-preparation.jpg        # Gallery image 4
    ├── equipment-action.jpg        # Gallery image 5
    └── finished-foundation.jpg     # Gallery image 6
```

### Adding or Replacing Images

1. **Prepare your images:**
   - Use high-quality photos (recommended: at least 800px wide)
   - Optimize for web (JPEG format, 85% quality is recommended)
   - Ensure proper aspect ratios for best display

2. **Replace existing images:**
   - Simply replace the image files in the appropriate directory
   - Keep the same filename to avoid updating HTML
   - Or rename and update the `src` attribute in `index.html`

3. **Image size recommendations:**
   - Hero image: 600x400px or similar 3:2 ratio
   - Service images: 400x250px or similar 8:5 ratio
   - About image: 500x350px or similar 10:7 ratio
   - Gallery images: 400x300px or similar 4:3 ratio

### Updating Image References in HTML

When adding new images with different filenames, update the corresponding `<img>` tags in `index.html`:

```html
<!-- Example: Update hero image -->
<img src="images/hero/your-new-image.jpg" alt="Descriptive alt text" class="hero-img">
```

**Important:** Always include descriptive `alt` text for accessibility and SEO.

## 📧 Quote Notifications

### Current Notification System

The website includes an enhanced notification system that provides user feedback when someone requests a quote:

1. **Form Validation:** Ensures required fields (Name, Phone, Project Details) are filled
2. **Loading State:** Shows a loading notification while processing
3. **Success Message:** Displays confirmation with contact timeline
4. **Error Handling:** Shows user-friendly error messages

### Notification Types

- **Success** (✅): Green notification for successful form submission
- **Error** (❌): Red notification for validation errors or issues
- **Loading** (⏳): Orange notification showing processing state
- **Info** (ℹ️): Blue notification for general information

### Setting Up Email Notifications

To receive actual email notifications when quotes are requested:

1. **Backend Integration Required:**
   The current system simulates form submission. To receive real notifications, you need:
   - A web server (Node.js, PHP, Python, etc.)
   - Email service (SendGrid, Mailgun, SMTP, etc.)

2. **Example Backend Implementation:**
   ```javascript
   // Example using Node.js/Express
   app.post('/api/contact', async (req, res) => {
     const { name, phone, email, service, message } = req.body;
     
     // Send email notification
     await sendEmail({
       to: 'info@rayconstructionco.com',
       subject: `New Quote Request from ${name}`,
       html: `
         <h2>New Quote Request</h2>
         <p><strong>Name:</strong> ${name}</p>
         <p><strong>Phone:</strong> ${phone}</p>
         <p><strong>Email:</strong> ${email}</p>
         <p><strong>Service:</strong> ${service}</p>
         <p><strong>Details:</strong> ${message}</p>
       `
     });
     
     res.json({ success: true });
   });
   ```

3. **Update JavaScript:**
   Uncomment and modify the `sendContactForm` function in `script.js` to make actual API calls.

### Customizing Contact Information

Update contact details in two places:

1. **index.html** (Contact section):
   ```html
   <p>(555) 123-4567</p>  <!-- Update phone number -->
   <p>info@rayconstructionco.com</p>  <!-- Update email -->
   ```

2. **index.html** (Footer):
   ```html
   <p>Phone: (555) 123-4567</p>  <!-- Update phone number -->
   <p>Email: info@rayconstructionco.com</p>  <!-- Update email -->
   ```

## 🎨 Styling and Customization

### Colors
The website uses a professional construction-themed color palette:
- Primary: #f39c12 (Orange)
- Secondary: #2c3e50 (Dark Blue)
- Success: #27ae60 (Green)
- Accent: #3498db (Blue)

### Fonts and Typography
- Clean, professional fonts for readability
- Responsive text sizing
- Proper contrast for accessibility

### Mobile Responsiveness
The website is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🚀 Deployment

1. **Static Hosting:** Upload all files to your web host
2. **Custom Domain:** Point your domain to the hosting location
3. **HTTPS:** Ensure SSL certificate is configured
4. **Testing:** Verify all images load and forms work correctly

## 📞 Support

For technical support or customization needs:
- Review this guide first
- Check browser console for any errors
- Ensure all image files exist and are properly named
- Test the contact form functionality

---

**Last Updated:** Current as of website deployment
**Version:** 1.0