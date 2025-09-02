function sayMyname(){
    console.log("v");
    console.log("i");
    console.log("j");
    console.log("a");
     console.log("y");
    
}

//sayMyname()

// function addTwoNumbers(number1,number2){    //parameter
//     console.log(number1+number2);
    

// }

function addTwoNumbers(number1,number2){    //parameter
    // let result=number1+number2
    // return result
    // console.log("vijay");

    return number1+number2 

}
const result=addTwoNumbers(4,2)
//console.log("Result",result);

function loginUserMessage(username="vijay"){
    if(!username){
       console.log("please eneter a username ");
       return
    }
    return `${username} jst logged in`
}

//console.log(loginUserMessage("vijay"));
//console.log(loginUserMessage());

//function calculateCartPrice(...num1){   // ... means for array form
function calculateCartPrice(val1,val2, ...num1){
    return num1
}
//console.log(calculateCartPrice(200,400,500,1000));

const user={
    username:"vijay",
    price:199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
//handleObject(user)
handleObject({
    username:"vijay",
    price:288
})

const myNewArray=[200,299,300,400]

function returnSecondValue(getArray){
    return getArray[1]
}
//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));
