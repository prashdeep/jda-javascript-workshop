function *generateUniqueNumber(){
    let counter = 0;
    while(counter < 10){
        console.log(`counter value is ${counter}`);
        counter++;
        yield Math.ceil(Math.random() * 1000);
    }
}


let iterator = generateUniqueNumber();
for (var i = 0; i < 11; i++){
    //console.log(iterator.next())
}

let numbers = [3,4,5,6]

let interatorFunArgs = function(a,b,c){
    //let items = Array.from(arguments);
    let items=[];
    items.push(...arguments, ...numbers);
    
    items.sort().forEach(num => console.log(num));
};

interatorFunArgs(1,2,3,4);
