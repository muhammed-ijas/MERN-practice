
//shallow copy , changes to nested will affect original
const shallow ={
    name:"ijas",
    addresss:{
        place:"balussery"
    }
}

let obj1 = {...shallow};
obj1.name="suhara"
obj1.addresss.place="thamarassery"

console.log("after shallow original : " ,shallow);
console.log("after shallow copy  : ",obj1);


//deep copy . changes to copied obj wont affect to original

const deep ={
    name:"ijas",
    addresss:{
        place:"balussery"
    }
}

let obj2 = JSON.parse(JSON.stringify(deep));
obj2.name="suhara"
obj2.addresss.place="thamarassery";
console.log("after deep original : ",deep);
console.log("after deep copy : ",obj2);