const express=require('express');

const app=express();

app.get('/',(req,res)=>{
    // res.json({
    //     success:true,
    //     product:[]
    // })
    res.status(400).json();
})
app.listen(3000,()=>{
    console.log("Server is Running on port 3000");
});