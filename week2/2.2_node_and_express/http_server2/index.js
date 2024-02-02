const express=require("express");
const app=express();
// const bodyParser=require("body-parser")
const PORT=3001;

// middleware
app.get("/",function(req,res){
    res.send("<h1>Hello World!!</h1>");
})

// app.use(bodyParser.json());
// app.get("/route-handler",function(req,res){
//     console.log(req.body); //showing undefined so we need to use middlewares to pass the body.
//     res.json({"name":"Kirti","age":20})
// })

// app.post("/post-request",function(req,res){
//     // res.send({kirti:"dfdl"})
//     console.log(req.body)
//     // res.send(req.headers);
//     res.send(req.body);


// })

app.listen(PORT,function(){
    console.log("App is listening at http://localhost:"+PORT);
}); 