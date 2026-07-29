function sayHello(){
    console.log("hello");
}
let id=setInterval(sayHello,2000);
setTimeout(()=>{
       clearIntervzal(id);
},7000);