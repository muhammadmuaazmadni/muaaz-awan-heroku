const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

var server = express();

server.get("/", (req, res, next) => {
    console.log("some one get menu");
    res.send("menu: what do you want? food or water");
})
server.get("/water", (req, res, next) => {
    console.log("some one is asking water");
    res.send("here is water");
})

server.get("/food", (req, res, next) => {
    console.log("some one is asking food");
    res.send("here is food");
})
server.get("/juice",(req,res,next) =>{
    console.log("some one is asking juice ")
    res.send("juice is also available")
})

server.listen(PORT, () => {
    console.log("server is running on port "+PORT);
})