const user={
    name:'Vinod',
    age:40,
    salary:450000,
    address:{
        city:'Bangalore',
        zip:577142,
        state:'Karnataka'
    },
    profile:[
        {
            name:'Facebook',
            profile:'http://www.facebook.com/vinod'
        },
        {
            name:'Twitter',
            profile:'http://www.twitter.com/vinod'
        }
    ]
}


//let name = user.name;
//let age = user.age;
//let fbProfile=user.profile[0].profile;
const name='List of All the Users';
const { 
    name:username='John Doe', 
    age:ageOfUser = 44, 
    company = 'TCS'
} = user;
//console.log(`${name}`);
//console.log(`${username }- ${ageOfUser} works for ${company}`)


function calculateTotalBill({amount, tip = 10, tax=0.15 }){
    return amount + tax*amount + tip;
}

//console.log(`Your total bill is ${calculateTotalBill({amount:100})}`);

//during returning the function value

function convertCurrency(amount){
    return {
        INR: amount,
        USD:amount * 66,
        YEN:amount * 10,
        EURO:amount * 80
    }
}

const {EURO, USD} = convertCurrency(100);
console.log(`USD value: ${USD}, Euro: ${EURO}`);