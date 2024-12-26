//a function along with its lexical scope is called closure 

function x(){
    var x =100
    console.log(x);
    function y(){
        console.log("inner :",x);
        
    }y() 
}x()