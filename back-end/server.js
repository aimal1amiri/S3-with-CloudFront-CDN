import express from 'express'
import {generateUpLoading} from './s3.js'

const app=express()

app.use(express.static('front-end'))

app.get('/s3',async (req,res)=>{
    const url = await generateUpLoading()
    res.send({url})
})

app.listen(5173,()=>{
    console.log("the server is running")
})