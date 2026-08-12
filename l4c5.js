const Eventemitter=require("events");
const e1=new Eventemitter();
for(let i=1;i<=11;i++){
    e1.on("message",()=>{
        console.log(`listener ${i} executed`);
    });

}
e1.emit("message");