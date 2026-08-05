const EventEmitter=require("events");
const eventEmitter=new EventEmitter();
console.log("******************************************");
console.log("NODE.JS EVENT EMITTER DEMONSTRATION");
console.log("******************************************");
console.log("Welcome to Full Stack Development Laboratory");
eventEmitter.on("Welcome",()=>{
    console.log(`Event Listener Executed.`);
    console.log("Welcome to Event-Driven Programming in Node.js");
});
console.log(`Event "Welcome" has been emitted Successfully.\n`);
eventEmitter.emit("Welcome");
console.log("Program Executed Successfully.");