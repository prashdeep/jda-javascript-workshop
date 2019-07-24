'use strict';

const outerFunction=function(firstname, lastname){
    
    const innerFunction=()=>{
      console.log(this);
    }
    innerFunction();
}

const user={firstname:'Ravi', lastname:'Kumar'};
outerFunction.call(user,user.firstname, user.lastname);