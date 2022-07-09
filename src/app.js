

const express = require('express');
const path = require('path');

const app = express();
const port =  3000;


app.use(express.static(path.join(__dirname,"../public/js")))
console.log(path.join(__dirname,"../public/js"))

//routing
app.get("/",(req,res)=>{
    res.send("welcome to home page ")
});

app.get("/about",(req,res)=>{
    res.send("welcome to about page ")

});

app.get("/wather",(req,res)=>{
    res.send("welcome to wather me page ")
});

app.get("*",(req,res)=>{
    res.send("page not found ")
});

app.listen(port ,()=>{
    console.log(`server is runing on port : ${port}`)
})




