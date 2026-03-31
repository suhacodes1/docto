# 🎯 COMMAND REFERENCE & OPERATIONS

## 🚀 STARTING THE APPLICATION

### Development (Recommended for Testing)

```bash
# Both frontend AND backend together
npm run dev:all

# Frontend only
npm run dev

# Backend only
npm run server:dev

# Backend (production mode)
npm run server
```

**Endpoints when running:**
- Frontend: http://localhost:3000
- Backend: http://localhost:3001
- API: http://localhost:3001/api/contact

---

### Production

```bash
# Build frontend
npm run build

# Start frontend
npm start

# Start backend
npm run server

# Or with PM2 (recommended for servers)
pm2 start server/server.js --name "api"
pm2 logs api
```

---

## 🛠️ DEVELOPMENT COMMANDS

```bash
# Install dependencies (must do first!)
npm install

# Update packages
npm update

# Check for linting issues
npm run lint

# Install specific package
npm install packagename

# Install dev dependency
npm install --save-dev packagename
```

---

## 🔍 DEBUGGING & LOGS

### View Server Logs

```bash
# Using nodemon (development)
npm run server:dev
# Logs appear in real-time

# Using PM2 (production)
pm2 logs api

# View last 100 lines
pm2 logs api --tail 100
```

### Check Process Status

```bash
# Windows - check if port is in use
netstat -ano | findstr :3001

# Mac/Linux - check if port is in use
lsof -i :3001

# View PM2 status
pm2 status
```

---

## 🗄️ DATABASE OPERATIONS

### Run SQL Directly

```bash
# Connect to database
mysql -h DB_HOST -u DB_USER -p DB_NAME

# Run SQL file
mysql -h DB_HOST -u DB_USER -p DB_NAME < server/database.sql

# Then type password when prompted
```

### Via phpMyAdmin (Easier)

1. Go to Hostinger Control Panel → Databases → phpMyAdmin
2. Select database
3. Click SQL tab
4. Paste SQL queries
5. Click Run

---

## 📧 EMAIL TESTING

### Test Email Configuration

```bash
# Check SMTP connection in logs when starting server
npm run server:dev

# Look for: "SMTP Connection successful"
# If error: Check credentials in .env file
```

### Send Test Email Manually

Use the `/api/contact` endpoint via curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{
    "fullName": "Test User",
    "email": "test@example.com",
    "company": "Test Corp",
    "service": "Web Development",
    "budget": "$5k-$15k",
    "message": "Test message"
  }'
```

Expected response:
```json
{
  "success": true,
  "message": "Thank you for your enquiry! We will get back to you soon.",
  "submissionId": 1
}
```

---

## 🔑 ENVIRONMENT VARIABLES

### View Current .env

```bash
# Windows
type .env

# Mac/Linux
cat .env

# In VS Code: Click on .env file
```

### Update .env Variables

1. Open `.env` in VS Code
2. Edit values
3. Save (Ctrl+S)
4. Restart backend: Stop `npm run server:dev` and run again

---

## 📦 GIT OPERATIONS

### Check Git Status

```bash
# See what changed
git status

# See what's staged
git diff --cached

# See unstaged changes
git diff
```

### Commit Your Work

```bash
# Stage everything except .env (already ignored)
git add .

# Commit with message
git commit -m "Add backend contact form system"

# Push to repository
git push
```

### Verify .env is Ignored

```bash
# Check if .env is in .gitignore
cat .gitignore | grep "\.env"

# Should show: .env*
# This prevents .env from being committed
```

---

## 🧳 DEPLOYMENT TO HOSTINGER

### Upload Files

```bash
# Using SCP (Secure Copy)
scp -r ./* user@your-domain.com:/path/to/app/

# Using WinSCP on Windows
# (Upload all files except node_modules and .git)
```

### On Server (SSH)

```bash
# Connect to server
ssh user@your-domain.com

# Navigate to app
cd /path/to/app

# Install dependencies
npm install

# Build Next.js
npm run build

# Start with PM2
npm install -g pm2
pm2 start server/server.js --name "api"
pm2 startup
pm2 save

# Check logs
pm2 logs api
```

---

## 🔒 SECURITY OPERATIONS

### Rotate Passwords

```
1. Go to Hostinger Control Panel
2. Update MySQL password
3. Update Email password
4. Update .env with new passwords
5. Restart backend: npm run server:dev
6. Test: Submit a form
7. Verify emails are still sending
```

### Backup Database

```bash
# Dump database to file
mysqldump -h DB_HOST -u DB_USER -p DB_NAME > backup.sql

# Import from backup
mysql -h DB_HOST -u DB_USER -p DB_NAME < backup.sql

# Or use Hostinger backup tools
# (Go to Databases → Backup)
```

---

## 🆘 EMERGENCY COMMANDS

### Kill Process on Port

```bash
# Windows
netstat -ano | findstr :3001
taskkill /PID <PID> /F

# Mac
lsof -i :3001
kill -9 <PID>

# Linux
sudo fuser -k 3001/tcp
```

### Reset NodeModules

```bash
# Remove and reinstall
rm -rf node_modules
npm install

# On Windows (PowerShell)
Remove-Item -Recurse -Force node_modules
npm install
```

### Check Disk Space

```bash
# Linux
du -sh .

# Mac
du -sh .

# Windows PowerShell
(Get-ChildItem -Path . -Recurse | Measure-Object -Property Length -Sum).Sum / 1GB
```

---

## 📊 MONITORING COMMANDS

### Check Application Health

```bash
# Test frontend
curl http://localhost:3000

# Test backend health endpoint
curl http://localhost:3001/api/health

# Response should be:
# {"status":"OK","message":"Server is running","timestamp":"..."}
```

### Monitor Resource Usage

```bash
# Mac/Linux
top
ps aux | grep node

# Windows PowerShell
Get-Process | Select Name, CPU, Memory
```

### Check Error Logs

```bash
# PM2 error logs
pm2 error api

# System logs (Linux)
tail -f /var/log/syslog | grep node

# Windows Event Viewer
# Search for "node" or "npm"
```

---

## 🔄 UPDATE & MAINTENANCE

### Update Node Packages

```bash
# Check for outdated packages
npm outdated

# Update all packages (safe)
npm update

# Update to latest (risky)
npm install package@latest

# Security audit
npm audit

# Fix security issues automatically
npm audit fix
```

### Update Next.js

```bash
# Check version
npm list next

# Update
npm install next@latest
npm run build

# Test
npm run dev
```

---

## 📋 DAILY OPERATIONS

### Start Application

```bash
# Development
npm run dev:all

# Check it's running
# Frontend: http://localhost:3000
# Backend: http://localhost:3001
```

### Monitor Form Submissions

```bash
# Check database via phpMyAdmin
1. Go to Hostinger phpMyAdmin
2. Select database
3. Click contact_submissions table
4. Click Browse
# You'll see all submissions with timestamps
```

### Check Emails Sent

```bash
# Check mail queue in Hostinger
1. Go to Hostinger Email Account
2. Look for "Mail Queue" or "Sent Items"
# Verify admin and user emails are going through
```

### View Server Logs

```bash
# During development
npm run server:dev
# Logs appear in terminal

# In production (PM2)
pm2 logs api
```

---

## 🆘 QUICK REFERENCE TABLE

| Task | Command |
|------|---------|
| Start everything | `npm run dev:all` |
| Start frontend only | `npm run dev` |
| Start backend only | `npm run server:dev` |
| Install packages | `npm install` |
| Update packages | `npm update` |
| Build for production | `npm run build` |
| Check linting | `npm run lint` |
| Restart backend | Stop + `npm run server:dev` |
| View logs (dev) | Check terminal where `npm run server:dev` runs |
| View logs (prod) | `pm2 logs api` |
| Kill port 3001 | Windows: `taskkill /PID <PID> /F` |
| Check git status | `git status` |
| Commit changes | `git add .` + `git commit -m "message"` |
| Test API | `curl http://localhost:3001/api/health` |

---

## 📞 SUPPORT

- Most issues: Check server logs (`npm run server:dev`)
- Credential issues: See `ENV_SETUP_GUIDE.md`
- Deployment issues: See `BACKEND_SETUP_GUIDE.md`
- General questions: Check `IMPLEMENTATION_SUMMARY.md`

## ⚡ Most Used Commands

```bash
# Development
npm run dev:all              # Start everything
npm run server:dev          # Restart backend only

# Production
pm2 start server/server.js  # Start backend
pm2 logs api                # View logs
git add . && git commit -m ""  # Commit code
```

Good luck! 🚀
