const express=require("express");
const app=express();
app.get('/',(req,resp)=>{
    resp.sendFile("./public/details.html",{root:__dirname});
});
app.get('/details',(req,resp)=>{
    resp.sendFile('./public/shedule.html',{root:__dirname});
})
app.listen(8000,()=>console.log("port started at 8000"));