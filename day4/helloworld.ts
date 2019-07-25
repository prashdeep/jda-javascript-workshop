class Employee{
    id;
    name;
    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    getName(){
        return this.name
    }
}

const user1 = new Employee(12,'Ramesh');
console.log(user1.getName());

let numbers=[12,34,23,45];
numbers.map(num => num * 4  ).forEach(n => console.log(`The number is ${n}`))


var promise2 = new Promise(function(resolve, reject) {
    resolve(34);
});