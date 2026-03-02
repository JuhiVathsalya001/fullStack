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
app.get('/testListings',(req,res)=>{
    let sampleListing=new Listing({
        title:"My dream place",
        description:"find yourself at places like these",
        price:1200,
        location:"Tirupati, Andhra Pradesh",
        country:"India",
    })
});
app.listen(8080,() =>{
    console.log("app is listening to port 8080");
});