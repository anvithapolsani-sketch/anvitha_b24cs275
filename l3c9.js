console.log("===========================");
console.log("NODE.JS TIMERS AND CALLBACK DEMONSTRATION");
console.log("=============================");

function displayMessage(){
    console.log("\nCallback function executed Successfully");
    console.log("Welcome to Full Stack Development Laboratory");
    console.log("Program Completed");
}
console.log("Program Started");
console.log("Waiting for 3 seconds");
setTimeout((displayMessage)=>{
},3000);

EventEmitter.emit("StudentLogin ","Anvithaaaa");
console.log("\nProgram Executed Successfully");