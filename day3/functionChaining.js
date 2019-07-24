const users=[
    {
        name:'vishal',
        age:33,
        salary:25000
    },
    {
        name:'kiran',
        age:30,
        salary:15000
    },
    {
        name:'Manish',
        age:40,
        salary:95000
    },
    {
        name:'akash',
        age:55,
        salary:225000
    },
    {
        name:'Raman',
        age:22,
        salary:15000
    },
    {
        name:'vikram',
        age:40,
        salary:85000
    },
    {
        name:'Akhil',
        age:35,
        salary:65000
    },
    {
        name:'Ashish',
        age:42,
        salary:10000
    },
    {
        name:'nagesh',
        age:28,
        salary:30000
    }
]

/*let userNames= users.map(user => ({name:user.name, age:user.age}));
let usersLessThan40=userNames.filter(user=> user.age < 40);
console.log(usersLessThan40);*/

users.filter(user => user.age > 35)
    .map(user=> user.name)
    .sort((a, b)=> ( a > b)? 1: -1)
    .forEach(u=> console.log(u));
