// Immeditely invoked function  expression(IIFE)


(function chai(){
       //named IIFE
       console.log(`DB connected`);
       
})();   // ; is way for two IIFE

// (function aurcode(){
//        console.log(`DB connected two`);
       
// })()    // both can apply above and below
// ( ()=> {
//        console.log(`DB connected two`);
       
// })()

( (name)=> {
       console.log(`DB connected two ${name}`);
       
})('vijay')

