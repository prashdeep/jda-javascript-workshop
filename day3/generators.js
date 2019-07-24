
function *customGenerator(){
    let counter = 0;
    while(true){
        counter++;
        console.log(counter);
        yield Math.random()*100;
    }
}

let iterator = customGenerator();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

