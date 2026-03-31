# 🚀 COMPLETE BACKEND SETUP & DEPLOYMENT GUIDE

## Overview of What Was Created

Your system now has:

### Frontend (Next.js)
- ✅ Reusable `ContactForm` component
- ✅ Already integrated into `/contact` page
- ✅ Already integrated into `StatsSection` component
- ✅ Form validation on client-side
- ✅ Error/success message display

### Backend (Express.js - in `/server` folder)
- ✅ API endpoint: `POST /api/contact`
- ✅ Email service with Nodemailer
- ✅ MySQL database integration
- ✅ Form validation middleware
- ✅ Error handling

### Data Flow
```
User fills form → ContactForm component → POST /api/contact
  ↓
Express server validates data
  ↓
Saves to MySQL database
  ↓
Sends admin email → info@digitalparadigm.com.au
  ↓
Sends confirmation email → user's email
```

---

## 🎯 STEP-BY-STEP IMPLEMENTATION

### STEP 1: Install Dependencies

```bash
npm install
```

**What gets installed:**
- `express` - Backend framework
- `cors` - Allow frontend to talk to backend
- `mysql2` - Database driver
- `nodemailer` - Email sending
- `dotenv` - Environment variables
- `nodemon` - Development auto-refresh
- `concurrently` - Run frontend + backend together

---

### STEP 2: Get Hostinger Credentials

Follow [ENV_SETUP_GUIDE.md](./ENV_SETUP_GUIDE.md) to collect:

✅ **MySQL:**
- DB_HOST
- DB_USER
- DB_PASSWORD
- DB_NAME

✅ **SMTP (Email):**
- SMTP_HOST
- SMTP_PORT
- SMTP_USER
- SMTP_PASSWORD

---

### STEP 3: Create `.env` File

1. Create file named `.env` in root directory (same level as `package.json`)

2. Copy this template:

```
# Server Configuration
PORT=3001
NODE_ENV=development
FRONTEND_URL=http://localhost:3000

# Database Configuration (from Hostinger)
DB_HOST=your_db_host
DB_PORT=3306
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_NAME=your_db_name

# Email Configuration (from Hostinger)
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=info@digitalparadigm.com.au
SMTP_PASSWORD=your_email_password

# Admin Email
ADMIN_EMAIL=info@digitalparadigm.com.au
```

3. Replace all `your_*` values with actual credentials

---

### STEP 4: Create Database Table

### Option A: Using phpMyAdmin (Easiest)

1. Go to **Hostinger Control Panel** → **Databases** → **phpMyAdmin**
2. Select your database
3. Click **SQL** tab
4. Copy this entire SQL script:

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

5. Paste in SQL tab
6. Click **Run** (play button)

### Option B: Using Command Line

```bash
mysql -h DB_HOST -u DB_USER -p DB_NAME < server/database.sql
```

When prompted, enter your DB_PASSWORD.

---

### STEP 5: Test Local Setup

#### Start Both Frontend & Backend Together:

```bash
npm run dev:all
```

This runs:
- ✅ Next.js frontend: http://localhost:3000
- ✅ Express backend: http://localhost:3001

#### Or Run Separately:

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server:dev
```

---

### STEP 6: Test the Form

1. Open http://localhost:3000
2. Go to `/contact` page or scroll to stats section
3. Fill out the contact form
4. Click **Send Enquiry**

#### Expected Results:
- ✅ Success message appears
- ✅ Admin email sent to info@digitalparadigm.com.au
- ✅ Confirmation email sent to user
- ✅ Data saved in database

#### Check Database:
1. Go to phpMyAdmin
2. Select your database
3. Click `contact_submissions` table
4. Click **Browse** tab
5. You should see your test submission

---

## 🌐 DEPLOYMENT TO HOSTINGER

### Hosting on Hostinger VPS/Shared Hosting

#### Prerequisites:
- Node.js installed on server (Hostinger provides this)
- SSH access to your hosting account

#### Steps:

#### 1. Upload Files to Server

```bash
# Using SCP (Secure Copy)
scp -r * user@your-hostinger-domain.com:/path/to/your/app/
```

Or use Hostinger **File Manager** in control panel to upload:
- `server/` folder
- `app/` folder
- `package.json`
- `.env` (keep this private, don't upload to git)

#### 2. Install Dependencies on Server

```bash
ssh user@your-hostinger-domain.com
cd /path/to/your/app
npm install
```

#### 3. Build Next.js

```bash
npm run build
```

#### 4. Create Database Table

Same as Step 4 above - use phpMyAdmin

#### 5. Start with PM2 (Process Manager)

```bash
# Install PM2 globally
npm install -g pm2

# Start Express server
pm2 start server/server.js --name "digital-paradigm-api"

# Startup on reboot
pm2 startup
pm2 save

# View logs
pm2 logs digital-paradigm-api
```

#### 6. Set Up Nginx (Reverse Proxy)

Create/edit `/etc/nginx/sites-available/your-domain.com`:

```nginx
server {
    listen 80;
    server_name your-domain.com;

    # Frontend (Next.js)
    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }

    # Backend API
    location /api/ {
        proxy_pass http://localhost:3001;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

Enable site:
```bash
sudo ln -s /etc/nginx/sites-available/your-domain.com /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx
```

#### 7. Set Up SSL/HTTPS

Hostinger includes free SSL. Enable it in control panel:
- Go to **Domains** → **Your Domain** → **SSL**
- Click **Generate SSL** or **Auto-renew**

---

## 📊 API DOCUMENTATION

### Health Check (for monitoring)

```
GET /api/health
```

**Response:**
```json
{
  "status": "OK",
  "message": "Server is running",
  "timestamp": "2024-03-25T10:30:00.000Z"
}
```

---

### Submit Contact Form

```
POST /api/contact
Content-Type: application/json
```

**Request Body:**
```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "company": "Acme Inc",
  "service": "Custom Web Development",
  "budget": "$5k - $15k",
  "message": "We need a website to showcase our products..."
}
```

**Success Response:**
```json
{
  "success": true,
  "message": "Thank you for your enquiry! We will get back to you soon.",
  "submissionId": 123
}
```

**Error Response (validation):**
```json
{
  "success": false,
  "message": "Email is required"
}
```

**Error Response (server error):**
```json
{
  "success": false,
  "message": "Failed to submit form. Please try again later."
}
```

---

## 📧 Email TEMPLATES

### Admin Notification Email

**To:** info@digitalparadigm.com.au  
**Subject:** Mail from Health - Digital Paradigm

**Body includes:**
- Full Name
- Email address
- Company
- Service selected
- Budget range
- Full message/project details
- Timestamp

---

### User Confirmation Email

**To:** User's email (from form)  
**Subject:** We received your enquiry - Digital Paradigm

**Body includes:**
- Thank you message
- Confirmation that team will review
- Links to portfolio, services, and free consultation
- Direct contact info

---

## 🛠️ TROUBLESHOOTING

### Server Won't Start

```bash
# Check if port 3001 is in use
# Windows:
netstat -ano | findstr :3001

# Mac/Linux:
lsof -i :3001

# Kill process if needed:
# Windows:
taskkill /PID <PID> /F

# Mac/Linux:
kill -9 <PID>
```

### Database Connection Error

```
Error: getaddrinfo ENOTFOUND
```

**Solutions:**
1. Verify DB_HOST is correct (ping it)
2. Ensure database user has remote access enabled
3. Check if Hostinger firewall blocks your IP

### SMTP/Email Not Sending

```
Error: Invalid login
```

**Solutions:**
1. Test credentials in Hostinger email settings
2. Enable "Less secure apps" if applicable
3. Try different SMTP port (465 instead of 587)
4. Check if email account is properly activated

### Frontend Can't Reach Backend

```
CORS Error: Access-Control-Allow-Origin
```

**Solution:**
- Verify FRONTEND_URL in `.env` matches your domain
- For local: `http://localhost:3000`
- For production: `https://yourdomain.com.au`

---

## 📈 MONITORING & LOGS

### View Server Logs

**With PM2:**
```bash
pm2 logs digital-paradigm-api
```

**Direct console (development):**
```bash
npm run server:dev
```

Logs show:
- ✅ API requests
- ✅ Email delivery status
- ✅ Database queries
- ✅ Errors

---

## 🔒 SECURITY CHECKLIST

- [ ] `.env` file is in root directory
- [ ] `.env` is in `.gitignore` (not committed to git)
- [ ] Database password is strong
- [ ] Email password is strong
- [ ] HTTPS/SSL enabled on domain
- [ ] Rate limiting enabled (if on shared hosting)
- [ ] Database backups enabled
- [ ] Contact form validates input
- [ ] CORS allows only your domain

---

## 📞 SUPPORT

Need help?

1. **Check the error message** - Usually tells you what's wrong
2. **Review ENV_SETUP_GUIDE.md** - Most issues are env variable related
3. **Check Hostinger documentation** - For hosting-specific issues
4. **Contact Hostinger support** - Credentials, access, networking issues
5. **Check server/README.md** - Technical details about server setup

---

## 🎉 YOU'RE ALL SET!

Your contact form system is now:
- ✅ Fully functional
- ✅ Sending emails to admin and users
- ✅ Storing data in database
- ✅ Ready for production
- ✅ Scalable

**What's next?**
- Monitor form submissions
- Check admin emails regularly
- Keep database backed up
- Update Node packages periodically: `npm update`
