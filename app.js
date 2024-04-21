const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', async (req, res) => {
    res.send('Hello from aws deployed service');
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Start the server
const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle server startup errors
server.on('error', (err) => {
    console.error('Server startup error:', err);
});
