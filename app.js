const express=require("express");
const app=express();
const mongoose=require("mongoose");

app.listen(8080,() =>{
    console.log("app is listening to port 8080");
});