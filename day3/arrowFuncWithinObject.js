'use strict';
//method cannot contain the arrow functions
const user={
    name:'Kiran',
    address:{
        city:'Hyderabad',
        zip:577142,
        state:'Telangana'
    },

    getCity:function(){
        console.log(this);
        return this.address.city;
    }
}


//console.log(user.getCity());
//cannot use the arrow function where arguments is required

const sum = (a, b, c)=>{
  console.log(arguments);
  return a + b + c;
}

console.log(sum(12,12,22));