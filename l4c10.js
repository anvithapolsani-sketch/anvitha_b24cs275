function task1(callback){
    console.log("t1 done");
    callback();
}
function task2(callback){
    console.log("t2 done");
    callback();
}
function task3(callback){
    console.log("t3 done");
    callback();
}
task1(()=>{
    task2(()=>{
        task3();
    });
});