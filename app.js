const express = require('express');

const app = express()

app.get('/',(req,res)=>{

    res.send('this is express server')

})

app.listen(4005, ()=>{

    console.log("applicaton is running")

})