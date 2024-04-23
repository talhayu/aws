const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', async (req, res) => {
    res.send('Hello from aws deployed service');
});

app.get('/new', async(req, res)=>{
    res.send('New route added')
})
 app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

