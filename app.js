const express = require('express');
const app = express();

const PORT = 22;

app.get('/', async (req, res) => {
    res.send('Hello from AWS deployed service');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
