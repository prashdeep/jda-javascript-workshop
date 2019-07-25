"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Car = /** @class */ (function () {
    function Car() {
        var _this = this;
        this.accelerate = function () { return _this.speed++; };
        this.slowDown = function () { return _this.speed--; };
        this.stop = function () { return _this.speed = 0; };
        this.color = "RED",
            this.make = "HONDA",
            this.wheels = 4,
            this.speed = 0;
    }
    return Car;
}());
exports.Car = Car;
var Employee = /** @class */ (function () {
    function Employee(_name, dept, age) {
        this._name = _name;
        this.dept = dept;
        this.age = age;
    }
    Object.defineProperty(Employee.prototype, "name", {
        get: function () {
            return this.name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Employee.prototype.applyLeave = function (noOfDays) {
        console.log("Applying for `{number}` of days holiday");
    };
    return Employee;
}());
exports.Employee = Employee;
var carObj = new Car();
carObj.accelerate();
carObj.accelerate();
console.log(carObj.speed);
