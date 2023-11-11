const express = require('express');
const auth = require("./routes/auth");
const cors=require("cors");

const app = express();
app.use(express.json())
app.use(cors(
    {
        origin:["https://deploy-mern-1whq.vercel.app"],
        methods:["POST","GET","DELETE"],
        credentials:true
    }
));

require("./connection/conn");


app.get('/',(req,res)=>{
res.send("HELLO SERVER STARTED");
})
app.use("/api/v1/",auth);


app.listen(5000 , ()=>{console.log("Server started on Port : ",5000)});