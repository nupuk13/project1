// const sayHi =(name,callBack)=>{
//     callBack(name)
// }
// const greet = (name) => console.log('hi ${name}');

// sayHi('aman',greet);

const outerFunction=(a)=>{
    function innerFunction(b){
        return a+b
    }
    return innerFunction
}
console.log(outerFunction(1)(2));