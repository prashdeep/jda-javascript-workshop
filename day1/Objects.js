var user = {
    id:12,
    firstName:'Kiran',
    lastName:'Kumar',
    hobbies:['blogging', 'photography','playing-guitar'],
    name:'Kiran Kumar',
    printFullName: function(){
        return this.firstName + ' '+this.lastName;
    }
}

var printFullNameFun= function( arg1, arg2) {
    console.log(this.name +' '+ arg1 +' '+ arg2);
    //return this.firstName + ' '+this.lastName;
}

var course={
    name:'Javascript Training'
}

/*
printFullNameFun.call(user , ' Bangalore', 'HR');
printFullNameFun.call(course, ' 10 days', 'Bangalore');


printFullNameFun.apply(user,['Developer','Bangalore']);
*/

var deferedFun = printFullNameFun.bind(user,'Developer', 'Bangalore');
console.log('deferring the function execution for later point in time....')
deferedFun();

//console.log(user.printFullName())