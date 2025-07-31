const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from current directory
app.use(express.static(__dirname));

// Route for the main world map
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'sourcegraph_world_employee_map.html'));
});

// Route for the US map
app.get('/us', (req, res) => {
    res.sendFile(path.join(__dirname, 'sourcegraph_employee_map.html'));
});

// Route for the world map (explicit)
app.get('/world', (req, res) => {
    res.sendFile(path.join(__dirname, 'sourcegraph_world_employee_map.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
    console.log(`Sourcegraph Employee Map server running on port ${PORT}`);
    console.log(`Visit http://localhost:${PORT} for the world map`);
    console.log(`Visit http://localhost:${PORT}/us for the US map`);
});
