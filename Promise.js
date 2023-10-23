
let p1=new Promise((resolve, reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
       console.log("I am a promise and I am resolved")
       resolve(true)
    },5000)
})

let p2=new Promise((resolve,reject)=>{
    console.log("Promise is Pending")
    setTimeout(()=>{
        console.log("I am a promise and I am rejected")
        reject(new Error("I am an error"))
    })
})

console.log(p1,p2)
p1.then((value)=>{
    console.log(value)
})

p2.catch((error)=>{
    console.log("Some error occured in p2")
})

p2.then((value)=>{
    console.log(value)
},(error)=>{
    console.log(error)
})

let p=new Promise(function(resolve, reject){
    alert("I am an alert in Promise")
})


console.log("Hello one")
setTimeout(function(){
    console.log("Hello In 2 s");
},2000)

console.log("My name is"+"Hello 3")
console.log(promise)