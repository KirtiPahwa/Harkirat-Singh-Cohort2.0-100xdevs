// in memory hospital // the inmemory will be refresh on restarting the server
// user will have kidney and will use get, put, post, delete operation on the kidney

const express=require("express");
const app=express(); 
const users=[{
    name:"John",
    kidneys:[{
        healthy:false
    }]
}];

// middleware
app.use(express.json());


// get request send the data using query parameters
app.get("/",function(req,res){
    const johnKidneys=users[0].kidneys;
    const numberOfKidneys=johnKidneys.length;
    let numberOfHealthyKidneys=0;
    for(let i=0;i<johnKidneys.length;i++){
        if(johnKidneys[i].healthy){
            numberOfHealthyKidneys+=1;
        }
    }
    const numberOfUnhealthyKidneys=numberOfKidneys-numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

// post request send the data using the body
app.post("/",function(req,res){
    const isHealthy=req.body.isHealthy;
    users[0].kidneys.push({
        healthy:isHealthy
    });
    res.json({msg:"done!!"})
})

// put request to update the unhealthy kidneys to healthy
app.put("/",function(req,res){
    for(let i=0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy=true;
    }
    res.json({})
})

// remove all unhealthy kidney
app.delete("/",function(req,res){
if( checkIfThereIsAtleastOneUnhealthyKidney()){
    const newKidneys=[];
    for(let i=0;i<users[0].kidneys.length;i++){
        if(users[0].kidneys[i].healthy){
            newKidneys.push({healthy:true})
        }
    }
    users[0].kidneys=newKidneys;
    res.json({msg:"Deleted succesfully!!"})
}else{
    res.status(411).json({msg:"You have no bad kidneys"})
}
})

function checkIfThereIsAtleastOneUnhealthyKidney(){
    let unhealthyKidneys=false;
    for(let i=0;i<users[0].kidneys.length;i++){
        if(!users[0].kidneys[i].healthy){
            unhealthyKidneys=true;
        }
    }
    return unhealthyKidneys;
}
app.get("/:patientName",function(req,res){
    const patientName=req.params.patientName;
    console.log(patientName);
    res.json({patientName})
})


app.listen(3000);




