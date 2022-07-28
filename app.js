require('dotenv').config();
const express=require('express');
const usersRoute=require("./routes/usersRoute")
const postsRoute=require('./routes/postsRoute')
const app=express();
const port=process.env.port;
app.use(express.json())

app.use('/user',usersRoute)
app.use('/post',postsRoute)


app.use('/*',(req,res)=>{
    res.json({
        status:404,
        message:"Requested Route not Found"
    })})

app.listen(port,()=>{
    console.log('host running on port:',port)
})


