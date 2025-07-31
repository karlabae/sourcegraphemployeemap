# Deployment Guide for Sourcegraph Employee Map

## Step 1: Install Prerequisites (if needed)
If you get git errors, install Xcode command line tools:
```bash
xcode-select --install
```

## Step 2: Push to GitHub

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Sourcegraph employee map web service"

# Add your GitHub repository as remote
git remote add origin https://github.com/karlabae/sourcegraphemployeemap.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 3: Deploy to Render

1. Go to https://render.com and sign in
2. Click "New +" → "Web Service"
3. Connect your GitHub account if not already connected
4. Select the repository: `karlabae/sourcegraphemployeemap`
5. Configure the service:
   - **Name**: `sourcegraph-employee-map` (or your preferred name)
   - **Region**: Choose closest to your users
   - **Branch**: `main`
   - **Root Directory**: (leave blank)
   - **Runtime**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free` (for testing)

6. Click "Create Web Service"

## Step 4: Access Your Maps

Once deployed, your maps will be available at:
- `https://your-service-name.onrender.com/` - World map
- `https://your-service-name.onrender.com/us` - US map
- `https://your-service-name.onrender.com/health` - Health check

## Files in Your Repository

- `sourcegraph_world_employee_map.html` - Global employee map
- `sourcegraph_employee_map.html` - US states map  
- `server.js` - Express server
- `package.json` - Node.js dependencies
- `README.md` - Project documentation

## Notes

- Render free tier may have cold starts (takes ~30 seconds to wake up)
- Your service will auto-deploy when you push changes to the main branch
- The service uses Render's provided PORT environment variable automatically
