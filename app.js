const express=  require('express');
const app = express()
require("dotenv").config()
const PORT = process.env.PORT || 80
app.get('/', async (req, res)=>{
    res.send('Hello from aws deployed service')
})
app.listen(PORT, ()=>{console.log('Port is listening', PORT)})