const express = require('express')
const app=express()
const morgan = require('morgan')


app.use(morgan('dev'));

app.get('/', (re,res)=>{
    for(let i=0; i<100000 ; i++){

    }
    res.send('Hello World')
})

app.listen(3002, ()=>{
    console.log('Stress service is running on port 3002')
})