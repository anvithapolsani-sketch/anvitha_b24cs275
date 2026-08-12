const Eventemitter=require("events");
const e1=new Eventemitter();
e1.on("login",()=>{
    console.log("checking username:");
});
e1.on("login",()=>{
    console.log("checking pass:");
});
e1.on("login",()=>{
    console.log("Login successful");
});
e1.emit("login");