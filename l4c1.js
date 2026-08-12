const Eventemitter=require("events");
const e1=new Eventemitter();
e1.on("grade",(name,marks)=>{
    console.log("Name:",name);
    console.log("Marks:",marks);
});
e1.emit("grade","Anvi",100);