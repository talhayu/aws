const express = require('express');
const app = express();

const PORT = 8080;

app.get('/', async (req, res) => {
    res.send('Hello from AWS deployed service');
});

<<<<<<< HEAD
app.get('/new', async(req, res)=>{
    res.send('New route added')
})
 app.listen(PORT, () => {
=======
app.listen(PORT, () => {
>>>>>>> 51a12275f680842c03308da4b7947fa3bafcbd5b
    console.log(`Server is running on port ${PORT}`);
});
