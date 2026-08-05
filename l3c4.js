import fs from "fs";
fs.stat("next_tick.js", function(){
    console.log("next_tick.js exists");
});
setImmediate(function(){
    console.log("Imeediate Timer 1 Executed");
});
setImmediate(function(){
    console.log("Immediate Timer 2 Executed");
});
process.nextTick(function(){
    console.log("Next Tick 1 Executed");
});
process.nextTick(function(){
    console.log("Next Tick 2 Executed");
});