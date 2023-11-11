const express = require('express');
const auth = require("./routes/auth");
const cors=require("cors");

const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:["https://movieadda-tan.vercel.app","http://localhost:3000"],
        methods:["POST","GET","DELETE"],
        credentials:true
    }
));



require("./connection/conn");


app.get('/',(req,res)=>{
res.send("HELLO SERVER STARTED");
})
app.use("/api/v1/",auth);

app.use((req,res,next)=>{
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
    res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
    next(); 
})

app.listen(5000 , ()=>{console.log("Server started on Port : ",5000)});