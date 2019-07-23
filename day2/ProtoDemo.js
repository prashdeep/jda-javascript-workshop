var Employee = function(name, age, salary){
    this.name = name;
    this.age = age;
    this.salary = salary;
}

Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.getAge = function(){
    return this.age;
}

Employee.prototype.getSalary = function(){
    return this.salary;
}

// calling the function without new operator

var suresh = new Employee('Suresh', 34, 50000);

var naveen = new Employee('Naveen', 44, 50000);

console.log(suresh.getName());
console.log(naveen.getName());