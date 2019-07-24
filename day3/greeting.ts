let flag:boolean;
let message:string;
let value:number;
let values:number[];
let anyVal:any;

flag = true;
message= 'some message';
value = 200;
values=[3,4,3,4];
anyVal = ['df',34,'sdf',true];

function greet(message:string):string{
    console.log('came inside the greet method')
    return 'hello !!'+message;
}

greet('23');
