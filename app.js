require('dotenv').config();
const express=require('express');
const usersRoute=require("./routes/usersRoute")
const postsRoute=require('./routes/postsRoute')
const app=express();
const port=process.env.port;
const cors = require("cors")

const whitelist = ["http://localhost:3000"]
const corsOptions = {
  origin: function (origin, callback) {
    if (!origin || whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error("Not allowed by CORS"))
    }
  },
  credentials: true,
}
app.use(cors(corsOptions))

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


