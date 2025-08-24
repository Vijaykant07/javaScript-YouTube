const name="Vijay"
const reCount=3
//console.log(name + reCount+" value");
//console.log(`Hello my name is ${name} and my repo count is ${reCount}`);

const gameName= new String('vijay-bp')
//console.log(gameName[0]);
//console.log(gameName.__proto__);  //syntax

//console.log(gameName.length);
//console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('v'));


const newString= gameName .substring(0,3)
console.log(newString);

const anotherString=gameName.slice(-5,2)
console.log(anotherString);

const newStringOne="  vijay  "
console.log(newStringOne.trim());

const url="https://vijay.com/vijay%20kumar"
console.log(url.replace('%20','-'));
