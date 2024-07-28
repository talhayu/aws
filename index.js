const express = require('express');
const app = express();
const path = require('path')

app.get('/', async (req, res) => {
    res.send('Hello from AWS deployed service');
});

app.get('/track_open', async (req, res) => {
    try {
        const email = req.query.email;
        console.log(`Email opened: ${email}`);
        const filePath = path.join(__dirname, 'public', 'pixel.png')
        res.sendFile(filePath)
    } catch (error) {
        console.error('Error updating email read status:', error);
        res.status(500).json({ message: 'Internal server error.' });
    }
});

app.listen(5050, () => {
    console.log(`Server is running on port`);
});
