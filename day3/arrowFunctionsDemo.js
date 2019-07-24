const sum = function(a,b){
    return a + b;
}
const sum1 = (a ,b)=> { return a + b ;}

const sum2 = (a,b) => a + b ;

const log = () => console.log('logging default message');

const logMessage = (message) => console.log(`logging ${message}`);

//logMessage('value to be logged ');

let numbers=[2,3,4,5,6,7];


let newArray = numbers.map(val => val * 2);
//console.log(newArray);

numbers.forEach((value,index) => console.log(`The value at ${index} is ${value}`));

let evenNumbers = numbers.filter((value)=> value % 2 === 0);
let oddNumbers = numbers.filter((value)=> value % 2 !== 0);
//console.log(`Even numbers : ${evenNumbers}`);
//console.log(`Odd numbers : ${oddNumbers}`);

let reducedValue = numbers.reduce((previous, current)=> previous + current, 10);
console.log(`The sum of all the numbers is ${reducedValue}`);



