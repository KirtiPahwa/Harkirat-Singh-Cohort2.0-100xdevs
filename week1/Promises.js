// Javascript is single threaded . Set tiemout, readfile , call api's , database calls are the async functions in javascript . Basically  they are provided by browser or node js not the part of the javascript. Whenever there is need to delegate the work, (like file reading, set timeout,fetch api's) and this happens in web api section of the browser and wheneer its done , the response send to the callbakc queue (other queue where work have to wait because the main call stack or thread is busy somewhere). Then from callback, event loop (which keep a watch on call stack and whenever its free, it send funtion to call stack from callback queue) sent to call stack (to main thread) to perfom 
//  Async function which is called and being executing by the web api. And when it's finisided , then it will come to call back queue and these asycnrounous function will only be executed when single thread is idle and thread will be idle when all the synchrounous function will be executed. So if there are 10 sycnrhounous function and 2 asynchournous funcitons are begin written above the 10 syn funcitons. But async func will wait in call back queueu after being executed in web api or operating system(file read work) , till all the 10 syn functions dont get executed.

const fs=require("fs");


// callbacks:  //ugly way

function kirtiReadFile1(fun){
    fs.readFile("a.txt","utf-8",function(err,data){
        fun(data);
    })
}

kirtiReadFile1(consoleOutput)






// using promises // pretty way - synctatically sugar. --> now the function returns the promise. ( it will send the pending status synchronously). But will execute the function which is passed in then function after the promise get resolve. And the resolve will be execute when the file reading will be done.
 
function kirtiReadFile2(){
    return new Promise(function(resolve){
    fs.readFile("a.txt","utf-8",function(err,data){
        resolve(data);
        })
    })
    
}
function consoleOutput(data){
    console.log(data);
}
kirtiReadFile2().then(consoleOutput);


// syntax of promises

// resolved, pending
var d=new Promise(function(onDone){
    setTimeout(()=>{
    onDone("kirti"),10000
    })
});

console.log(d);
d.then(consoleOutput)

// Rather than using .then method , i can use await . And for await , i have to use async

async function main(){
    var p=await kirtiReadFile1();
    console.log(p);
}
main();