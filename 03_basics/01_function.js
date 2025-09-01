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
console.log(loginUserMessage());
