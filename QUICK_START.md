# ⚡ QUICK START - WHAT YOU NEED TO DO NOW

## 📋 Your Checklist (5 Minutes)

### ✅ Already Done For You:
- [x] Created reusable `ContactForm` component
- [x] Set up Express.js server in `/server` folder
- [x] Connected both components to use the form
- [x] Created email service with Nodemailer
- [x] Created database module for MySQL
- [x] Created validation middleware
- [x] Updated `package.json` with dependencies

### 🔧 YOU NEED TO DO:

#### 1. **Collect Your Hostinger Credentials** (5 min)
See: `ENV_SETUP_GUIDE.md`

Get these from Hostinger:
- `DB_HOST`, `DB_USER`, `DB_PASSWORD`, `DB_NAME` (MySQL)
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_PASSWORD` (Email)

#### 2. **Create `.env` File** (2 min)

In the **root folder** (same as `package.json`), create file named `.env`:

```
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

DB_HOST=your_value_here
DB_PORT=3306
DB_USER=your_value_here
DB_PASSWORD=your_value_here
DB_NAME=your_value_here

SMTP_HOST=your_value_here
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@digitalparadigm.com.au
SMTP_PASSWORD=your_value_here

ADMIN_EMAIL=info@digitalparadigm.com.au
```

#### 3. **Create Database Table** (2 min)

1. Go to **Hostinger Control Panel** → **Databases** → **phpMyAdmin**
2. Click **SQL** tab
3. Paste this:

```sql
CREATE TABLE IF NOT EXISTS contact_submissions (
  id INT AUTO_INCREMENT PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  company VARCHAR(100),
  service VARCHAR(100),
  budget VARCHAR(50),
  message LONGTEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  INDEX idx_email (email),
  INDEX idx_created_at (created_at)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
```

4. Click **Run**

#### 4. **Install & Test** (3 min)

```bash
npm install
npm run dev:all
```

Then:
- Open http://localhost:3000
- Go to `/contact` page
- Fill form and submit
- Check email + database

---

## 📁 File Structure Created

```
your-project/
├── server/                    ← BACKEND FOLDER (NEW)
│   ├── server.js             ← Main file (run: npm run server)
│   ├── database.sql          ← SQL to create table
│   ├── README.md             ← Server documentation
│   ├── routes/
│   │   └── contact.js        ← API routes
│   ├── controllers/
│   │   └── contactController.js
│   ├── middleware/
│   │   └── validation.js
│   └── utils/
│       ├── database.js
│       └── emailService.js
│
├── app/
│   ├── components/
│   │   └── ContactForm.tsx   ← NEW! Reusable form component
│   ├── contact/
│   │   └── page.jsx          ← UPDATED to use ContactForm
│   └── (other files unchanged)
│
├── .env                       ← YOU CREATE THIS (credentials)
├── .env.example               ← Template (reference)
├── ENV_SETUP_GUIDE.md        ← How to get credentials
├── BACKEND_SETUP_GUIDE.md    ← Full deployment guide
├── package.json               ← UPDATED with new scripts & deps
└── (other files unchanged)
```

---

## 🚀 Available Commands

```bash
# Development
npm run dev              # Frontend only
npm run server:dev       # Backend only (auto-reload)
npm run dev:all          # Frontend + Backend together ⭐

# Production
npm run build            # Build Next.js
npm start                # Run Next.js
npm run server           # Run Express server

# Other
npm run lint             # Check code quality
npm install              # Install/update packages
```

---

## 🎯 How It Works

### User Journey:
```
1. User fills form on /contact or stats section
   ↓
2. Clicks "Send Enquiry"
   ↓
3. Frontend validates form (ContactForm component)
   ↓
4. Sends POST to http://localhost:3001/api/contact
   ↓
5. Backend receives request
   ↓
6. Validates data (validation middleware)
   ↓
7. Saves to MySQL database
   ↓
8. Sends email to admin@info.com.au (admin notification)
   ↓  
9. Sends email to user (confirmation)
   ↓
10. Shows "Thank you" message to user
```

---

## 📊 Database Fields Saved

When someone submits the form, these are stored:
```
- full_name        (e.g., "John Doe")
- email            (e.g., "john@example.com")
- company          (e.g., "Acme Inc")
- service          (e.g., "Custom Web Development")
- budget           (e.g., "$5k - $15k")
- message          (The full project details)
- created_at       (Timestamp - automatic)
- updated_at       (Timestamp - automatic)
```

View in phpMyAdmin: **Databases** → **Your DB** → **contact_submissions** → **Browse**

---

## 📧 Emails Sent

### 1. ADMIN NOTIFICATION
- **To:** info@digitalparadigm.com.au
- **Subject:** "Mail from Health - Digital Paradigm"
- **Contains:** Full form details for your team

### 2. USER CONFIRMATION
- **To:** User's email (from form)
- **Subject:** "We received your enquiry - Digital Paradigm"
- **Contains:** Thank you message + links to services/portfolio

---

## ⚠️ Common Issues & Quick Fixes

| Error | Fix |
|-------|-----|
| `.env not found` | Create file named `.env` (with dot) in root folder |
| `Can't find DB_HOST` | Check Hostinger → Databases for your connection details |
| `Port 3001 already in use` | Change PORT in `.env` to 3002 or 3003 |
| `Email not sending` | Check SMTP credentials. Try SMTP_PORT 465 with SMTP_SECURE=true |
| `CORS error` | Ensure FRONTEND_URL in .env matches your domain |

---

## 🔒 IMPORTANT - SECURITY

1. **NEVER commit `.env` to GitHub** ⚠️
   - It has passwords!
   - File already in `.gitignore`

2. **Keep passwords strong**
   - DB password: 16+ characters
   - Email password: same

3. **For production (Hostinger)**
   - Use HTTPS
   - Use PM2 to keep server running
   - Set NODE_ENV=production

---

## 📞 WHEN YOU NEED HELP

### Issue: Can't get database credentials
→ See: `ENV_SETUP_GUIDE.md` → Database Section

### Issue: Email not working
→ See: `ENV_SETUP_GUIDE.md` → Email Section

### Issue: Deploying to Hostinger
→ See: `BACKEND_SETUP_GUIDE.md` → Deployment Section

### Issue: Form not submitting
1. Check browser console (F12) for errors
2. Check server logs: `npm run server:dev`
3. Verify `.env` values are correct

---

## ✨ What You Get

- ✅ Professional contact forms on 2 locations
- ✅ Email notifications to you
- ✅ Confirmation emails to users
- ✅ Data stored in database
- ✅ Form validation
- ✅ Error handling
- ✅ Ready for production
- ✅ Easy to customize

---

## 🎉 READY TO START?

1. Get credentials from Hostinger (5 min)
2. Create `.env` file (2 min)
3. Run: `npm install` (1 min)
4. Create database table (2 min)
5. Run: `npm run dev:all` (test it!)

**Total time: ~15 minutes** ⏱️

---

**Questions?** Check the other guides:
- `ENV_SETUP_GUIDE.md` - Environment variables
- `BACKEND_SETUP_GUIDE.md` - Full technical guide
- `server/README.md` - Server documentation
