const Eventemitter=require("events");
const e1=new Eventemitter();
function welcome(){
    console.log("Welcome");
}
e1.on("login",welcome);
e1.emit("login");
e1.removeListener("login",welcome);
e1.emit("login");