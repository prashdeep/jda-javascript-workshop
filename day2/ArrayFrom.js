let arrayFrom = function(name, age = 45, salary = 34000){
   
    const params = Array.from(arguments);
    params.forEach(param => console.log(param));
}

//arrayFrom("Raja", 33,4000);

const num = Array.of('one', 'two','three');
//console.log(num);

/*
for(let index = 0; index < num.length; index++){
    console.log(num[index]);
}

num.forEach(n => console.log(n))


for(let number of num){
    console.log(number);
}



for ( let number in num){
    console.log(num[number]);
}
*/

 var user = {
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
}

//can be used with objects
for ( let prop in user){
    console.log(user[prop])
}