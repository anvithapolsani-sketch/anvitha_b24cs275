function outer(){
    let m="welcome to node.js";
    function inner(){
        console.log(m);
    }
    return inner;
}
const callback=outer();
callback();