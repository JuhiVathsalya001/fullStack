const express=require("express");
const app=express();
const mongoose=require("mongoose");

MONGO_URL="";

main()
    .then(()=>{
        console.log("connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    });
    
async function main(){
    await mongoose.connect(MONGO_URL);
}

app.get('/' ,(req,res)=>{
    res.send("Hi i am root");
});

app.listen(8080,() =>{
    console.log("app is listening to port 8080");
});