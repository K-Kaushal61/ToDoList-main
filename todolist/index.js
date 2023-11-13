import express from "express";
import bodyParser from "body-parser";
const app=express();
const port=3000;

app.use(bodyParser.urlencoded({extended : true}));
app.use(express.static("public"));

const date= new Date();
const week=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
const month=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Nov","Dec"];
const day="";
const task = [];
const worktask = [];
const data={
    day: week[date.getDay()] + "  " + month[date.getMonth()] + " " + date.getDate() + "      " + date.getFullYear(),
    task,
    worktask,
    };
app.get("/",(req,res)=>{
    
    res.render("index.ejs",data);
});

app.post("/",(req,res)=>{
    const newItem = req.body.newItem;
    task.push(newItem);
    res.redirect("/");
});

app.get("/work",(req,res)=>{
    res.render("work.ejs",data);
})
app.post("/work",(req,res)=>{
    const newtask = req.body.newItem;
    worktask.push(newtask);
    res.redirect("/work");
});



app.listen(port,()=>{
    console.log(`Server Running on port ${port}`);
});
