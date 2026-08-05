const EventEmitter=require('events');
const eventEmitter=new EventEmitter();
console.log("=================================");
console.log("NODE.JS CUSTOM EVENTS DEMONSTRATION");
console.log("=====================================");
console.log("Welcome to Full Stack Development Laboratory");
eventEmitter.on("StudentLogin",(name)=>{
    console.log("Student Login Event Triggered");
    console.log("Sudent Name:","Anvitha");
});

eventEmitter.on("StudentLogin",()=>{
    console.log("Attendance Marked Successfully");
    console.log("Welcome to Full Stack Development Laboratory");
});
eventEmitter.emit("StudentLogin");
eventEmitter.emit("StudentLogin");
