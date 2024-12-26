const obj = {
    name:"ijas",
    age: 21 ,
    address :{
        place: "shanthinagar",
        post: "ekarool" ,
        pin: 673574
    }
}
const obj2 = structuredClone(obj);

//it wont affect the original copy , because structuredClone make a deep copy
obj2.address.place = "estatemukk"

console.log(obj,obj2);