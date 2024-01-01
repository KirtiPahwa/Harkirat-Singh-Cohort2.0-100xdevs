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

console.log(promise1);

promise1.then((data)=>{console.log(data)})

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values);
});