let a1 = Symbol('one'); //sdfsdfsdfsdfw35rwersdrffsdsdf
let a2 = Symbol('one');//235wegfgdeghdg

let num1 = Number(3);
let num2 = Number(3);

//console.log(num1 === num2);

//console.log(a1 === a2);

const user={
    [Symbol('name')]:'Pradeep',
    [Symbol('age')]:33,
    [Symbol('city')]:'bangalore',
    [Symbol('name')]:'kumar',
}

const symbols =Object.getOwnPropertySymbols(user);
symbols.forEach(symbol=> console.log(user[symbol]));