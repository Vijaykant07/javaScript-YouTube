const user={
    username:"vijya",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
        
        
    }

}

// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()

console.log(this);


// function chaai(){
//     let username="vijay"
//     console.log(this.username);
    
// }
//  chaai()

const chaai=() => {
    let username="vijay"
    console.log(this);
    
}


//chaai()

// const addTwo=(num1,num2) => {
//     return num1+num2
// }

//const addTwo=(num1,num2) => num1+num2

//const addTwo=(num1,num2) => (num1+num2)

//const addTwo=(num1,num2) => (username:"vijay")
const addTwo=(num1,num2) => ({username:"vijay"})

console.log(addTwo(1,2));

const myArray=[2,4,6,1]
//myArray.forEach(()=>)
