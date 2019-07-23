var greet = function(firstName, lastName, greetFun){
    greetFun(firstName + ' '+ lastName )
}

var printGreet = function (name){
    console.log(name)
}

var goodMorningGreet = function(name){
    console.log('Good Morning !!' + name);
}

var goodEveningGreet = function(name){
    console.log('Good Evening !!' + name);
}

greet("Hari", 'Kumar', goodMorningGreet);


var greetWithCustomMessage = function(firstName, lastName){
    var greetMessage = function(greetMessage){
        console.log(greetMessage +' '+ firstName + ' '+lastName);
    }
    return greetMessage;
}

var customGreetFun = greetWithCustomMessage('Hari', 'Kumar');
customGreetFun('Welcome to Javascript training !!')