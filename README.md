# Sourcegraph Employee Map Web Service

Interactive maps showing Sourcegraph's global employee distribution.

## Features

- **World Map** (`/` or `/world`): Global view with country-level distribution
- **US Map** (`/us`): Detailed state-level view for US employees
- Interactive tooltips with employee counts and locations
- Responsive design with zoom and pan capabilities

## Local Development

1. Install Node.js (https://nodejs.org/)
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm start
   ```
4. Open http://localhost:3000 in your browser

## Deployment to Render

1. Push this code to a GitHub repository
2. Connect your GitHub account to Render
3. Create a new Web Service on Render
4. Select your repository
5. Use these settings:
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
   - **Node Version**: 18+ (auto-detected from package.json)

## Routes

- `/` - World employee map (default)
- `/world` - World employee map
- `/us` - US states employee map
- `/health` - Health check endpoint

## Tech Stack

- Node.js + Express.js server
- D3.js for map visualization
- TopoJSON for geographic data
- Responsive HTML/CSS/JavaScript frontend
