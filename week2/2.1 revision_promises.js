function promisified_funciton(duration){
    let p=new Promise(function(resolve){
        resolve("1000");
    });
    return p;
}
console.log(promisified_funciton(1000));




const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'foo');
});
const promise4 = new Promise((resolve, reject) => {
    setTimeout(reject, 100, 'k');
  });
console.log(promise1);

promise1.then((data)=>{console.log(data)})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});

// reject
way1:
promise4.then(function(data){
    console.log(data);
}).catch(function(err){
    console.log("error is "+err)
})
// way2:
promise4.then(function(resolve){
    console.log("resolved")
}, function(reject){
    console.log("rejected")
})




// promiese should be defines only for asyncrhounous function so that you can use . then () function .
// . then() function returns promise and accepts two function
//  .resolve(resolved_data) and .reject(rejected_data)function takes data as argrument and calls .then (fun(resolved_data), fun(rejected_data)){return promise} function and pass the data into it


// Example two: promise inside the promise
function promsified_function(){
    let res=new Promise(function(resolve){
        resolve( function(){
            return new Promise(function(resolve){
            resolve("fooo");
        });
    })
        
    })
    return res;
}

promsified_function().then(function(res){
    console.log(res);
    return res();
}).then(function(res){
console.log(res)

})