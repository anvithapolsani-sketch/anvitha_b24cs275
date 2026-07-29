const http=require('http');
const server=http.createServer((req,res)=>{
    res.write("heyy");
    res.end();
});
server.listen(3000,()=>{
    console.log("running");
});

