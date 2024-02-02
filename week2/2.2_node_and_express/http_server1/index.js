const express=require("express");
const app=express();
const bodyParser=require("body-parser")
const PORT=3000 || process.env.PORT;


// middleware
app.get("/",function(req,res){
    res.send("<h1>Hello World!!</h1>");
})

app.use(bodyParser.json());
app.get("/route-handler",function(req,res){
    console.log(req.body); //showing undefined so we need to use middlewares to pass the body.
    res.json({"name":"Kirti","age":20})
})

app.post("/post-request",function(req,res){
    // res.send({kirti:"dfdl"})
    console.log(req.query.message)
    console.log(req.body)
    // res.send(req.headers);
    res.status(400).send(req.body);


})

app.listen(PORT,function(){
    console.log("App is listening at http://localhost:"+PORT);
}); 

// default port of all the websites are ..... 443
// you can export the port in ther terminal  by: export PORT=3002 and you can excess by process.env.PORT
// you can excess anything from url in the get request or post request by using req.query.name_of_the_variable and pass it in url by: http://localhost:3000/post-request?message=123