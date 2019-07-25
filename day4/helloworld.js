var Employee = /** @class */ (function () {
    function Employee(id, name) {
        this.id = id;
        this.name = name;
    }
    Employee.prototype.getName = function () {
        return this.name;
    };
    return Employee;
}());
var user1 = new Employee(12, 'Ramesh');
console.log(user1.getName());
var numbers = [12, 34, 23, 45];
numbers.map(function (num) { return num * 4; }).forEach(function (n) { return console.log("The number is " + n); });
var promise2 = new Promise(function (resolve, reject) {
    resolve(34);
});
