const express = require ('express')
const cors = require('cors')
const bodyParser = require ('body-parser')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/project-nation')  //connecting mongodb
  .then(() => console.log('Connected!'))


  const userSchema = new mongoose.Schema({   //creating schema
    
    email: String,
    password: String,
    cpassword: String
  });

  const User = mongoose.model('user',userSchema)

const server = express()    

server.use(cors())                  //use as middleware
server.use(bodyParser.json())

server.post('/demo',async (req,res)=>{ 
    
    let user = new User();
    user.email = req.body.email
    user.password = req.body.password
    user.cpassword = req.body.cpassword
    const doc = await user.save();


    console.log(doc)
    res.json(doc)
})

server.listen(8080,()=>{
    console.log("Server Started ✅");
})