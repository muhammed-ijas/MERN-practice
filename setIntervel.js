// The `setInterval` method repeatedly executes a specified function at defined intervals (in milliseconds).
// It continues until cleared using `clearInterval`.


function intervel(){
    let i=0;
    
    const inter = setInterval(()=>{
        console.log(i);
        i++
    },1000)

    setTimeout(()=>{
        clearInterval(inter)
    },6000)
}
intervel()