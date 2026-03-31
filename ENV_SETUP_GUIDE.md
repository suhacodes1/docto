# 🔧 ENVIRONMENT VARIABLES SETUP GUIDE

## Quick Start - Copy & Fill This Template

Create a `.env` file in the **root directory** (same level as `package.json`) and fill in the values below:

```
# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration (Get from Hostinger)
DB_HOST=
DB_PORT=3306
DB_USER=
DB_PASSWORD=
DB_NAME=

# Email Configuration (Get from Hostinger)
SMTP_HOST=
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@digitalparadigm.com.au
SMTP_PASSWORD=

# Admin Email
ADMIN_EMAIL=info@digitalparadigm.com.au
```

---

## 📍 HOW TO GET YOUR HOSTINGER CREDENTIALS

### 1️⃣ DATABASE CREDENTIALS (MySQL)

#### Steps:
1. Go to **Hostinger Control Panel** → https://hpanel.hostinger.com
2. Select your **Domain** or **Hosting Account**
3. Go to **Databases** (sometimes called "Database Manager")
4. Look for your database name (or click "Create New Database")
5. Find or click the database name to see details
6. Click **"phpMyAdmin"** or **"Manage"** button
7. In phpMyAdmin top right, look for your connection details

#### What to Copy:
```
DB_HOST = The server address (e.g., 193.123.45.67 or localhost)
DB_PORT = Usually 3306 (default MySQL port)
DB_USER = Your database username (shown in database manager)
DB_PASSWORD = Your database password (what you set when creating the DB)
DB_NAME = Your database name (shown in database manager)
```

**Alternative Method:**
- In Hostinger, go to **Domains** → **Your Domain** → **MySQL Details**
- All credentials will be listed there

---

### 2️⃣ SMTP/EMAIL CREDENTIALS

#### Steps:
1. Go to **Hostinger Control Panel**
2. Navigate to **Email** or **Email Accounts**
3. Find or create email account: **info@digitalparadigm.com.au**
4. Click on the email account
5. Look for **"SMTP Settings"** or **"Outgoing Mail"**

#### What to Copy:

**For SMTP Host:**
```
SMTP_HOST = Usually one of:
  - mail.digitalparadigm.com.au
  - smtp.hostinger.com
  - Or check Hostinger email settings page
```

**For SMTP Port & Security:**
```
SMTP_PORT = 587 (for TLS - most common)
           OR 465 (for SSL - if TLS doesn't work)
SMTP_SECURE = false (for port 587)
             OR true (for port 465)
```

**For Username & Password:**
```
SMTP_USER = info@digitalparadigm.com.au (your full email)
SMTP_PASSWORD = Your email account password
```

**Finding email settings in Hostinger:**
- Go to **Email Accounts**
- Click on **info@digitalparadigm.com.au**
- Look for tabs like: "Settings", "SMTP", "Outgoing Mail", or "Server Settings"
- You'll see something like:

```
Incoming Mail (IMAP):
  Server: mail.yourdomain.com
  Port: 993
  
Outgoing Mail (SMTP):
  Server: mail.yourdomain.com
  Port: 587
  Username: info@digitalparadigm.com.au
```

Use the **Outgoing Mail** settings.

---

### ⚠️ COMMON ISSUES & SOLUTIONS

| Issue | Solution |
|-------|----------|
| "Can't connect to database" | Verify DB_HOST is exact IP address or localhost. Check database is active in Hostinger |
| "Wrong password for database" | Re-check DB_PASSWORD - it's case-sensitive |
| "Email not sending" | Verify SMTP credentials. Try SMTP_PORT 465 with SMTP_SECURE=true |
| "Connection refused" | Check SMTP_HOST is correct. Sometimes needs full domain like mail.yourdomain.com |
| "Port 587 doesn't work" | Try port 465 instead. Toggle SMTP_SECURE to true |

---

### 🔄 TESTING YOUR CONFIGURATION

After creating `.env`, test the connection:

```bash
# Install dependencies
npm install

# Start server
npm run server

# Should output: "Server running on http://localhost:3001"
# And: "SMTP Connection successful"
```

**If you see errors:**
1. Check `.env` file exists in root directory
2. Verify all values are correct
3. Check Hostinger credentials again
4. Test database connection separately if needed

---

### 📝 PRODUCTION ENVIRONMENT

When deploying to Hostinger VPS/Server, update `.env`:

```
NODE_ENV=production
FRONTEND_URL=https://digitalparadigm.com.au
PORT=3001

# Use same DB and SMTP credentials
# (They work for both local and production)
```

---

### 🔐 SECURITY NOTES

1. **Never commit `.env` to git** - It contains passwords!
2. **`.env` is in `.gitignore`** by default (already set up)
3. **Keep `.env.example`** in git (for reference, no actual passwords)
4. **Only share `.env` with trusted team members**
5. **Rotate credentials periodically** for security

---

### 📞 NEED HELP?

If you can't find these settings in Hostinger:

**Contact Hostinger Support:**
- Hostinger Phone/Chat: Available 24/7 in control panel
- Ask: "I need my MySQL connection details and SMTP settings for info@digitalparadigm.com.au"

**They will give you:**
- Database host, port, user, password
- SMTP host, port, and test credentials if available
