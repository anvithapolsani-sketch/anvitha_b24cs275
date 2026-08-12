const Eventemitter=require("events");
const e1=new Eventemitter();
e1.once("start",()=>{
    console.log("Application started");
});
e1.emit("start");
e1.emit("start");