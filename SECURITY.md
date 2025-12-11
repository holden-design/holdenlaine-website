# Security & Privacy Policy

## Payment Security

### Stripe Integration
- All credit card payments are processed through **Stripe**, a PCI-DSS Level 1 compliant payment processor
- Your credit card information is **never stored** on our servers
- Stripe handles all payment processing using industry-standard encryption (TLS 1.2+)
- All payment data is encrypted in transit and at rest

### Security Headers
All API endpoints include the following security headers:
- **X-Content-Type-Options**: `nosniff` - Prevents MIME type sniffing
- **X-Frame-Options**: `DENY` - Prevents clickjacking attacks
- **Content-Security-Policy**: `default-src 'self'` - Restricts resource loading
- **Strict-Transport-Security**: Enforces HTTPS
- **X-XSS-Protection**: `1; mode=block` - Protects against XSS attacks

## Email Collection & Storage

### Data We Collect
When you submit a form on our website, we collect:
- Email address (required)
- Name (optional)
- Phone number (optional)
- Booking details and preferences
- Page/form type where the submission occurred
- Timestamp of submission

### How We Use Your Data
- **Booking purposes**: To respond to your inquiry and schedule photography sessions
- **Communication**: To follow up on your booking request or provide updates
- **Service improvement**: To understand your needs and improve our services

### Data Storage
- Email submissions are stored in a secure JSON file (`data/emails.json`)
- Files are protected with standard server-level access controls
- Data is **NOT** shared with third parties without your consent
- Data is **NOT** used for marketing or reselling purposes

### Email Privacy
- Emails submitted through our website are kept confidential
- We only use your email to respond to your specific inquiry
- You can request deletion of your data at any time by contacting us

## Gift Card Security

### Code Validation
- Gift card codes are validated server-side before redemption
- Codes cannot be redeemed multiple times (one-time use)
- Invalid or already-used codes are rejected with appropriate error messages

### Gift Card Data
- Gift card redemption history is tracked locally
- Code values are stored securely without sensitive information
- No personal data is linked to unredeemed gift card codes

## Contact Information

For security concerns or data privacy requests:
- Email: holdenlaine@outlook.com
- Please include "Security" or "Privacy Request" in your subject line

## Compliance

This website complies with:
- **GDPR** (General Data Protection Regulation) for EU users
- **CCPA** (California Consumer Privacy Act) for California users
- **PCI DSS** standards via Stripe payment processor
- Industry best practices for web application security

## Last Updated
December 2025
