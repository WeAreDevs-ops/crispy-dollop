
const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Serve static files (CSS, JS, images, etc.)
app.use(express.static(path.join(__dirname)));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Handle download route for the extension
app.get('/download', (req, res) => {
    const file = path.join(__dirname, 'AdBlock Pro RDG.zip');
    res.download(file, 'AdBlock Pro RDG.zip', (err) => {
        if (err) {
            console.error('Download error:', err);
            res.status(404).send('File not found');
        }
    });
});

// Start server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});
