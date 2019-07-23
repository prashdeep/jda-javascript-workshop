const veg = ['Veg-Pulav', 'Idli','Puliyogare']
const nonVeg = ['Chicken Biriyani','Hyderabadi Biriyani'];

const dishes = [...veg, 'Pizza', ...nonVeg];

//console.log(dishes);


const players=['Virat','Rohit','Dhoni','Hardik'];

[captain, vCaptain, ...rest] = players;

console.log(`Captain is ${captain}, Vice Captain is ${vCaptain} and rest of the players are ${rest}`)
console.log(rest);