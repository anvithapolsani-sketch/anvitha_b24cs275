const EventEmitter=require("events");
const eventEmitter=new EventEmitter();
eventEmitter.on("greet",()=>{
    console.log("Hello! Welcome to Creation of Basic Event");
});
eventEmitter.emit("greet");
