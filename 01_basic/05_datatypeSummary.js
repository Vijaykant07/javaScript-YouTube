// Primitive
// 7 type : String,Number, Boolean, null,undefined, symbol,
// BigInt

const { useOptimistic, useImperativeHandle } = require("react");

const score = 100
const scoreValue = 100.3

const isLoggedIn= false
const outsideTemp=null
let userEmail;
const id=Symbol('123')
const anotherId=Symbol('123')

//console.log(id===anotherId);

//const bigNumber=123456789012348667n



// Reference (Non primitive)

// Array,Objects, Functions


const heros=["vijay","sachin","vipan"]
let myObj={
    name:"vija",
    age:22,
}


const myFunction=function(){
    console.log("hello world");
    
}

//console.log(typeof heros);



//**********************************************
// Stack (primitive), Heap(non primitive)
let myYoutubename="vijaykant"

let anothername="vijayaurCode"
console.log(myYoutubename);

console.log(anothername);


let userOne={
    email: "vijay@123.com"
   // UPi :"vijay@ybl"
}
let userTwo= user
userTwo.email="vija@google.com"
console.log(user.email);
console.log(userTwo.email);

