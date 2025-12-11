# Database & Storage Format Reference

## Email Collection (`data/emails.json`)

### File Location
```
/data/emails.json
```

### Structure
```json
[
  {
    "email": "user@example.com",
    "name": "John Doe",
    "page": "/contact",
    "timestamp": "2025-12-11T10:15:30.123Z",
    "formType": "booking"
  },
  {
    "email": "another@example.com",
    "name": null,
    "page": "/gift-cards",
    "timestamp": "2025-12-11T10:20:45.456Z",
    "formType": "gift-card-purchase"
  }
]
```

### Field Descriptions
- **email** (string): User's email address, normalized to lowercase
- **name** (string|null): User's name if provided, null if not filled
- **page** (string): URL path where submission occurred
- **timestamp** (string): ISO 8601 format timestamp of submission
- **formType** (string): Type of form submitted:
  - `booking` - Contact/booking form
  - `gift-card-purchase` - Gift card purchase
  - `gift-card-redeem` - Gift card redemption attempt

### Accessing Emails
- Raw JSON: Open `data/emails.json` directly
- For lists: Sort by timestamp descending to get newest first
- For analysis: Parse timestamp for date-based filtering

---

## Gift Card Database (`redeem-giftcard.json.ts`)

### Current Storage Location
```
/src/pages/api/redeem-giftcard.json.ts
```

### In-Memory Database Structure
```typescript
interface GiftCard {
  code: string;           // e.g., "GC-2025-0001-DEMO"
  value: number;          // €50, €100, €150, €200, or €250
  used: boolean;          // false = available, true = redeemed
  createdAt: string;      // ISO 8601 timestamp
}

const giftCardDatabase: Record<string, GiftCard> = {
  'GC-2025-0001-DEMO': {
    code: 'GC-2025-0001-DEMO',
    value: 100,
    used: false,
    createdAt: '2025-12-11T10:00:00.000Z'
  }
};
```

### Adding Gift Cards
```typescript
// Method 1: Hardcoded in code
giftCardDatabase['GC-2025-0002-CUSTOM'] = {
  code: 'GC-2025-0002-CUSTOM',
  value: 150,
  used: false,
  createdAt: new Date().toISOString()
};

// Method 2: API endpoint (not currently implemented)
POST /api/create-giftcard.json
{
  "code": "GC-2025-0002-CUSTOM",
  "value": 150
}
```

### Code Format Recommendations
```
GC-YYYY-####-TYPE
├── GC = Gift Card prefix
├── YYYY = Year created
├── #### = Sequential number (padded to 4 digits)
└── TYPE = Card category (DEMO, PROMO, STANDARD, etc.)

Examples:
- GC-2025-0001-DEMO (demo code)
- GC-2025-0100-STANDARD (production code)
- GC-2025-0200-PROMO (promotional code)
```

---

## Stripe Payment Records

### Metadata Storage
Stripe stores the following with each transaction:
```json
{
  "sessionId": "cs_test_...",
  "clientSecret": "pi_test_...",
  "metadata": {
    "giftCardAmount": "100"
  }
}
```

### To Access Stripe Records
1. Go to https://dashboard.stripe.com
2. Navigate to Payments section
3. Filter by:
   - Amount: €50, €100, €150, €200, €250
   - Metadata: Gift card amount matches
   - Description: "Holden Laine Photography Gift Card"

### Webhook Events to Track (Production)
- `payment_intent.succeeded` - Payment successful
- `payment_intent.payment_failed` - Payment failed
- `checkout.session.completed` - Checkout completed

---

## Data Flow Diagram

```
User Submits Form
       ↓
[contact.astro]
       ↓
    ┌──────────────────────────┐
    │                          │
    ↓                          ↓
Email Collection      Web3Forms Submit
[collect-email.json]  [External Service]
    ↓                          ↓
data/emails.json         Email to inbox
    
---

User Buys Gift Card
       ↓
[gift-cards.astro]
       ↓
[stripe-checkout.json]
       ↓
    Stripe Payment
       ↓
[Email Collection] → data/emails.json
       ↓
Success Page

---

User Redeems Gift Card
       ↓
[gift-cards.astro]
       ↓
[redeem-giftcard.json]
       ↓
   Validate Code
       ↓
  Mark as Used
       ↓
Redirect to /contact
(localStorage stores value)
```

---

## Backup & Restore

### Backing Up Email Data
```bash
# Create backup
cp data/emails.json data/emails.backup.$(date +%Y%m%d).json

# List all backups
ls -la data/emails.backup.*

# Restore from backup
cp data/emails.backup.20251211.json data/emails.json
```

### Version Control (Git)
**Important**: Don't commit `data/emails.json` to git!

Add to `.gitignore`:
```
data/emails.json
.env
.env.local
```

---

## Database Migration (Future)

When moving from JSON to a real database:

### PostgreSQL Schema Example
```sql
CREATE TABLE emails (
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  page VARCHAR(255) NOT NULL,
  timestamp TIMESTAMP DEFAULT NOW(),
  formType VARCHAR(50) NOT NULL,
  CONSTRAINT email_format CHECK (email ~* '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$')
);

CREATE TABLE gift_cards (
  id SERIAL PRIMARY KEY,
  code VARCHAR(50) UNIQUE NOT NULL,
  value DECIMAL(10, 2) NOT NULL,
  used BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW(),
  redeemed_at TIMESTAMP,
  redeemed_by_email VARCHAR(255)
);

CREATE TABLE payment_records (
  id SERIAL PRIMARY KEY,
  stripe_session_id VARCHAR(255) UNIQUE,
  stripe_payment_intent VARCHAR(255),
  amount DECIMAL(10, 2),
  currency VARCHAR(3),
  status VARCHAR(50),
  email VARCHAR(255),
  created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Data Retention Policy (Recommended)

For compliance (GDPR, CCPA):
- **Emails**: Keep for 1-2 years, then delete
- **Gift Cards**: Keep indefinitely (for business records)
- **Payments**: Keep for 7-10 years (tax/legal requirements)
- **Logs**: Keep for 30-90 days

Implement automated cleanup:
```typescript
// Delete emails older than 2 years
emails = emails.filter(e => {
  const entryDate = new Date(e.timestamp);
  const cutoffDate = new Date();
  cutoffDate.setFullYear(cutoffDate.getFullYear() - 2);
  return entryDate > cutoffDate;
});
```

---

## Exporting Data

### Export to CSV
```javascript
function exportEmailsToCSV(emails) {
  const csv = [
    ['Email', 'Name', 'Page', 'Timestamp', 'Form Type'],
    ...emails.map(e => [e.email, e.name || '', e.page, e.timestamp, e.formType])
  ];
  return csv.map(row => row.join(',')).join('\n');
}
```

### Export to Excel
Use a package like `xlsx`:
```bash
npm install xlsx
```

```typescript
import * as XLSX from 'xlsx';

const ws = XLSX.utils.json_to_sheet(emails);
const wb = XLSX.utils.book_new();
XLSX.utils.book_append_sheet(wb, ws, 'Emails');
XLSX.writeFile(wb, 'emails.xlsx');
```

---

## Monitoring & Alerts (Production)

Recommended monitoring:
- **Email count**: Alert if unusual spike (possible attack)
- **Failed gift card attempts**: Alert if >10 failed validations
- **Failed payments**: Track Stripe failures for troubleshooting
- **Data file size**: Alert if emails.json exceeds expected size

Use services like:
- Sentry for error tracking
- DataDog for monitoring
- CloudFlare for DDoS protection
