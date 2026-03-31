# ✅ MASTER CHECKLIST - COMPLETE SETUP

## 📝 PHASE 1: PREPARATION (5 minutes)

- [ ] Read this checklist completely
- [ ] Have your Hostinger login ready
- [ ] Have a text editor ready (VS Code recommended)
- [ ] Have terminal open in project root

---

## 🔍 PHASE 2: GATHER CREDENTIALS (5-10 minutes)

### MySQL Database Info
- [ ] Log into Hostinger Control Panel
- [ ] Go to **Databases** → Find your database
- [ ] Copy: **DB_HOST** (e.g., 193.123.45.67)
- [ ] Copy: **DB_USER** (e.g., user_abc123)
- [ ] Copy: **DB_PASSWORD** (your database password)
- [ ] Copy: **DB_NAME** (database name, e.g., website_db)
- [ ] Copy: **DB_PORT** (usually 3306)

### SMTP Email Info
- [ ] Go to **Email** section in Hostinger Control Panel
- [ ] Find: **info@digitalparadigm.com.au**
- [ ] Click email account → Look for "SMTP Settings"
- [ ] Copy: **SMTP_HOST** (e.g., mail.yourdomain.com or smtp.hostinger.com)
- [ ] Copy: **SMTP_PORT** (usually 587 or 465)
- [ ] Copy: **SMTP_USER** (full email address)
- [ ] Copy: **SMTP_PASSWORD** (email password)
- [ ] Determine: **SMTP_SECURE** (false for 587, true for 465)

---

## 📄 PHASE 3: CREATE .env FILE (2 minutes)

- [ ] In VS Code, open project root folder
- [ ] Create **NEW FILE** named `.env` (with the dot)
- [ ] Copy this template:

```
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

DB_HOST=PASTE_YOUR_DB_HOST_HERE
DB_PORT=3306
DB_USER=PASTE_YOUR_DB_USER_HERE
DB_PASSWORD=PASTE_YOUR_DB_PASSWORD_HERE
DB_NAME=PASTE_YOUR_DB_NAME_HERE

SMTP_HOST=PASTE_YOUR_SMTP_HOST_HERE
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@digitalparadigm.com.au
SMTP_PASSWORD=PASTE_YOUR_EMAIL_PASSWORD_HERE

ADMIN_EMAIL=info@digitalparadigm.com.au
```

- [ ] Replace all `PASTE_YOUR_*` values with actual credentials
- [ ] **IMPORTANT:** Don't share this file!
- [ ] **NOTE:** .gitignore already excludes it automatically

---

## 💾 PHASE 4: CREATE DATABASE TABLE (3 minutes)

### Method: phpMyAdmin (Easiest)

- [ ] Go to Hostinger Control Panel
- [ ] Click **Databases** (or **phpMyAdmin**)
- [ ] Select your database from list
- [ ] Click **SQL** tab in top menu
- [ ] Copy this entire SQL script:

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

- [ ] Paste into the SQL text box in phpMyAdmin
- [ ] Click **Run** or **Execute** button
- [ ] Should see message: "Query successful"
- [ ] (Optional) Click **Browse** on table to verify it exists

---

## 📦 PHASE 5: INSTALL & SETUP (1-2 minutes)

### In Terminal (in project root):

```bash
# Install all dependencies
npm install
```

- [ ] Wait for installation to complete (should take 1-2 minutes)
- [ ] Should see: "added X packages"
- [ ] No ERROR messages (warnings are OK)

---

## 🚀 PHASE 6: START & TEST (5 minutes)

### Start Everything Together:

```bash
npm run dev:all
```

- [ ] Should see both servers starting:
  - [ ] "Server running on http://localhost:3001" 
  - [ ] "ready - started server on 0.0.0.0:3000"
  - [ ] "SMTP Connection successful"

- [ ] Both servers running without errors = ✅ SUCCESS

---

## 🧪 PHASE 7: TEST THE FORM (5 minutes)

### Test Contact Form:

- [ ] Open browser: **http://localhost:3000**
- [ ] Navigate to **/contact** page
- [ ] Fill out form with test data:
  - [ ] Full Name: "Test User"
  - [ ] Email: "test@example.com" (use YOUR email)
  - [ ] Company: "Test Company"
  - [ ] Service: Select any service
  - [ ] Budget: "$5k - $15k"
  - [ ] Message: "This is a test message"
- [ ] Click **"Send Enquiry"** button

### Check Success:

- [ ] Green success message appears ✅
- [ ] Form clears automatically ✅
- [ ] Check YOUR email inbox for confirmation ✅
- [ ] (Optional) Check phpMyAdmin - data should be in table ✅

### If Something Fails:

- [ ] Check terminal for error messages
- [ ] See **TROUBLESHOOTING** section below
- [ ] Check ENV_SETUP_GUIDE.md for credential issues

---

## 📍 ALSO TEST: StatsSection Form

- [ ] Go to homepage
- [ ] Scroll down to **Statistics section**
- [ ] Fill and submit the form there too
- [ ] Should work identically ✅

---

## 🌐 PHASE 8: TEST EMAILS (Done in Phase 7, but double-check)

After submitting form, check:

### Admin Notification Email:
- [ ] Subject: "Mail from Health - Digital Paradigm"
- [ ] To: info@digitalparadigm.com.au
- [ ] Contains: User details, message, service selected
- [ ] Should arrive within 30 seconds

### User Confirmation Email:
- [ ] Subject: "We received your enquiry - Digital Paradigm"
- [ ] To: Your test email address
- [ ] Contains: Thank you message, links to services
- [ ] Should arrive within 30 seconds

---

## 🗄️ PHASE 9: VERIFY DATABASE (Optional but recommended)

- [ ] Go to phpMyAdmin
- [ ] Select your database
- [ ] Click **contact_submissions** table
- [ ] Click **Browse** tab
- [ ] Should see your test submission with:
  - [ ] Test name
  - [ ] Test email
  - [ ] Your message
  - [ ] Timestamp

---

## 📋 PHASE 10: VERIFY FILES CREATED

### In VS Code, check these files exist:

**Backend Folder:**
- [ ] `server/server.js` ✅
- [ ] `server/routes/contact.js` ✅
- [ ] `server/controllers/contactController.js` ✅
- [ ] `server/middleware/validation.js` ✅
- [ ] `server/utils/database.js` ✅
- [ ] `server/utils/emailService.js` ✅
- [ ] `server/database.sql` ✅
- [ ] `server/README.md` ✅

**Components:**
- [ ] `app/components/ContactForm.tsx` ✅
- [ ] `app/contact/page.jsx` (updated) ✅
- [ ] `app/components/StatsSection.tsx` (updated) ✅

**Root Files:**
- [ ] `.env` (created by you) ✅
- [ ] `.env.example` ✅
- [ ] `ENV_SETUP_GUIDE.md` ✅
- [ ] `BACKEND_SETUP_GUIDE.md` ✅
- [ ] `QUICK_START.md` ✅
- [ ] `IMPLEMENTATION_SUMMARY.md` ✅
- [ ] `API_ROUTING_DECISION.md` ✅
- [ ] `nodemon.json` ✅
- [ ] `package.json` (updated) ✅

---

## 🎉 PHASE 11: YOU'RE DONE! 

What to do next:

- [ ] Keep `.env` file private (already in .gitignore)
- [ ] Commit code to git (will NOT commit .env)
- [ ] Monitor emails for actual form submissions
- [ ] Check database periodically for submissions
- [ ] When ready to deploy, follow BACKEND_SETUP_GUIDE.md

---

## 🆘 TROUBLESHOOTING

### "Port 3001 already in use"
- [ ] Change PORT in .env to 3002
- [ ] Or: Kill process on 3001: `netstat -ano | findstr :3001`

### ".env not found" error
- [ ] Check file is named `.env` (with dot)
- [ ] Check it's in ROOT folder (same as package.json)
- [ ] Restart terminal

### "Database connection refused"
- [ ] Verify DB_HOST is correct (should be IP address)
- [ ] Check DB_USER and DB_PASSWORD are exact
- [ ] Verify database exists in Hostinger
- [ ] Contact Hostinger support for access issues

### "Email not sending"
- [ ] Verify SMTP credentials are correct
- [ ] Try SMTP_PORT 465 with SMTP_SECURE=true
- [ ] Check email account is activated in Hostinger
- [ ] Check server logs: `npm run server:dev`

### "Form won't submit"
- [ ] Check browser console (F12) for errors
- [ ] Check server logs in terminal
- [ ] Verify .env values are all correct
- [ ] Is backend running? Should see "Server running on..."

### "No success message appears"
- [ ] Open browser developer tools (F12)
- [ ] Look in Console tab for errors
- [ ] Look in Network tab - POST request status?
- [ ] Check if backend is actually running

---

## 📞 GET HELP

| Issue | Read This |
|-------|-----------|
| Can't find credentials | ENV_SETUP_GUIDE.md |
| Server won't start | BACKEND_SETUP_GUIDE.md → Troubleshooting |
| Email issues | ENV_SETUP_GUIDE.md → Email Section |
| Database error | ENV_SETUP_GUIDE.md → Database Section |
| Need to deploy | BACKEND_SETUP_GUIDE.md → Deployment |
| Which API to use | API_ROUTING_DECISION.md |

---

## ✨ SUCCESS INDICATORS

You'll know everything is working when:

✅ `npm run dev:all` starts without errors  
✅ Both frontend (port 3000) and backend (port 3001) are running  
✅ Form submits and shows success message  
✅ Admin receives email within 30 seconds  
✅ User receives confirmation email within 30 seconds  
✅ Database table has new entry  

---

## 🚀 READY TO DEPLOY?

When you're ready for production:

1. Follow BACKEND_SETUP_GUIDE.md → Deployment section
2. Get Hostinger VPS/Hosting details
3. Upload files via SCP or File Manager
4. Install Node.js on server
5. Create database table (same SQL)
6. Set up HTTPS/SSL
7. Run with PM2 for reliability

---

## 15-MINUTE QUICK VERSION (No explanations)

```
1. Get Hostinger credentials (5 min)
2. Create .env file (2 min)
3. Create database table (3 min)
4. npm install (1 min)
5. npm run dev:all (check it runs)
6. Test form (4 min)
```

That's it! You're live. 🎉

---

**Estimated Total Time:** 45-60 minutes for first-time setup

**Any issues?** Check the guides above - they cover everything!
