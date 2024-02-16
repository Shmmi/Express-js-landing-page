import  Express  from "express";
import path from 'path';
const app = Express();
const port = 3000;

const staticPath = path.join("./1st assignment")
app.use(Express.static(staticPath));
app.get("/",(req,res)=>{
res.send("This is my landing page")
})
app.listen(port,()=>
{
    console.log("Server started at port 3000")
});