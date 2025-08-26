// Dates

let myDate= new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());

//console.log(typeof myDate);
 
// let myCreateDate= new Date(2025,7,26)
// let myCreateDate= new Date(2025,7,26,5,6)
let myCreateDate= new Date("2025-08-26")
//console.log(myCreateDate.toDateString());
//console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now()
// console.log(myTimeStamp);
// console.log(myCreateDate.getTime());
//console.log(Math.floor(Date.now()/1000));

let newDate= new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());

// `${newDate.getDay()} and the time`

newDate.toLocaleString('default',{
    weekday: "long",
    //timeZone:''
    
})
