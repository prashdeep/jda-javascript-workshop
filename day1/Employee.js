
var Employee = function(name, age){
    this.name = name;
    this.age = age;
}

Employee.prototype.getAge = function(){
    return this.age;
}

Employee.prototype.setAge = function(age){
    this.age = age;
}

var ram = Employee("Ram", 45);
var vijay = new Employee('Vijay', 34);


ram.setAge(46);
console.log(ram.getAge());

vijay.setAge(46);
console.log(vijay.getAge());