import express from 'express'

const app=express()

app.get('/s3',(req,res)=>{
    
    res.send("it is working")
})

app.listen(5173,()=>{
    console.log("the server is running")
})