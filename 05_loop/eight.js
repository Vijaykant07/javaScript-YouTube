const myNums=[1,2,3]

// const myTotal=myNums.reduce(function (acc,currval) {
//    console.log(`acc:${acc} and currVal: ${currval}`);
   
//     return acc+currval

// },0)

const myTotal=myNums.reduce((acc,curr) => acc+curr,0)

console.log(myTotal);

const shoppingCart=[
    {
        itemName:"js course",
        price:100

    },
     {
        itemName:"ruby course",
        price:200
    },
     {
        itemName:"java course",
        price:500
    },
     {
        itemName:"ds course",
        price:700
    },
]
const priceTopay=shoppingCart.reduce((acc, item) => acc+item.price,0)
console.log(priceTopay);
