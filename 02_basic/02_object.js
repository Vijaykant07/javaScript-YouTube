// singleton
// objecr literals
//Object.create

const mySym=Symbol("key1")



const JsUser={
    name:"Vijay",
    "full name":"vijay kumar",
    [mySym]:"myKey1",
    age:18,
    location:"Manpur",
    email:"vijay@123.com",
    isLoggedIn:false,
    lastLoginDays:["saturday","sunday"]

}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);
// console.log(JsUser[mySym]);

// JsUser.email="vija@1233445.com"
// Object.freeze(JsUser)
// JsUser.email="vija@mircospft.com"
// console.log(JsUser);


JsUser.greeting=function(){
    console.log("hello Js user");
    
}
JsUser.greetingtwo=function(){
    console.log(`hello Js user,${this.name}`);
    
}
console.log(JsUser.greeting());
console.log(JsUser.greetingtwo());


    


