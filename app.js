const express=  require('express');
const app = express()

const PORT = 8080
app.get('/', async (req, res)=>{
    res.send('Hello from aws deployed service')
})
app.listen(PORT, ()=>{console.log('Port is listening', PORT)})