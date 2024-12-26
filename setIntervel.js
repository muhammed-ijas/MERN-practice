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