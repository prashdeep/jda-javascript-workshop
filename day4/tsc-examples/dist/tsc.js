System.register("LikeComponent", [], function (exports_1, context_1) {
    "use strict";
    var LikeComponent;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            LikeComponent = (function () {
                function LikeComponent(_likeCount, _isSelected) {
                    var _this = this;
                    this._likeCount = _likeCount;
                    this._isSelected = _isSelected;
                    this.onClick = function () {
                        if (_this._isSelected) {
                            _this.likeCount++;
                        }
                        else {
                            _this._likeCount--;
                        }
                        _this._isSelected = !_this._isSelected;
                    };
                }
                Object.defineProperty(LikeComponent.prototype, "likeCount", {
                    get: function () {
                        return this._likeCount;
                    },
                    set: function (likeCount) {
                        this._likeCount = likeCount;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LikeComponent.prototype, "isSelected", {
                    get: function () {
                        return this._isSelected;
                    },
                    enumerable: true,
                    configurable: true
                });
                return LikeComponent;
            }());
            exports_1("LikeComponent", LikeComponent);
        }
    };
});
System.register("LikeComponentTest", ["LikeComponent"], function (exports_2, context_2) {
    "use strict";
    var LikeComponent_1, likes;
    var __moduleName = context_2 && context_2.id;
    return {
        setters: [
            function (LikeComponent_1_1) {
                LikeComponent_1 = LikeComponent_1_1;
            }
        ],
        execute: function () {
            likes = new LikeComponent_1.LikeComponent(10, false);
            likes.onClick();
            likes.onClick();
            likes.onClick();
            console.log("Likes: " + likes.likeCount + " and isSelected: " + likes.isSelected);
        }
    };
});
var Phone = (function () {
    function Phone(_price, _model, _desc) {
        this._price = _price;
        this._model = _model;
        this._desc = _desc;
    }
    Object.defineProperty(Phone.prototype, "price", {
        get: function () {
            return this._price;
        },
        set: function (price) {
            this._price = price;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "desc", {
        get: function () {
            return this._desc;
        },
        set: function (desc) {
            this._desc = desc;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Phone.prototype, "model", {
        get: function () {
            return this._model;
        },
        set: function (model) {
            this._model = model;
        },
        enumerable: true,
        configurable: true
    });
    Phone.prototype.toString = function () {
        return "Model: " + this._model + ", desc: " + this._desc + ", price: " + this._price;
    };
    return Phone;
}());
var samsungA50 = new Phone(15000, "A50", 'Latest phone');
var iPhone6S = new Phone(50000);
var vivo = new Phone(25000, 'Vivo-Plus');
samsungA50.desc = 'Added the improved camera lense support';
var desc = samsungA50.desc;
var greet = function (message) {
    console.log(message);
    return "  Hi " + message;
};
greet("Have a good day !!");
var sum = function (a, b) {
    return a + b;
};
var result = sum(67, 78);
var genericMessge;
genericMessge = "sdfsdfsfd";
var strmessage = genericMessge;
console.log(strmessage);
var sumFunc = function (a, b) {
    console.log(a + b);
};
var suFunc2 = function (a, b) {
    console.log(a + b);
};
var arrowFunc = function (a, b) { console.log(a + b); };
var arrowFunc2 = function (a, b) { return console.log(a + b); };
var arrowFunction3 = function (message) { return console.log("Logging the message  " + message); };
System.register("classExample", [], function (exports_3, context_3) {
    "use strict";
    var Car, Employee, carObj;
    var __moduleName = context_3 && context_3.id;
    return {
        setters: [],
        execute: function () {
            Car = (function () {
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
            exports_3("Car", Car);
            Employee = (function () {
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
            exports_3("Employee", Employee);
            carObj = new Car();
            carObj.accelerate();
            carObj.accelerate();
            console.log(carObj.speed);
        }
    };
});
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
function newPrintLabel(labelType) {
    console.log(labelType.label);
}
var labelObj = { label: "Welcome to Typescript training" };
newPrintLabel(labelObj);
var readonlyObj = { x: 10, y: 20 };
var a = [1, 2, 3, 4, 5];
var ro = a;
var lenth = ro.length;
function createSquare(config) {
}
var interfaceObj = {
    color: "green",
    width: 200,
};
var mySquare = createSquare({ colour: "red", width: 100, });
var mySquareObj = { colour: "red", width: 100 };
createSquare(mySquareObj);
var squareObj = {};
squareObj.color = "blue";
squareObj.sideLength = 10;
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
var strMessage;
strMessage = "JDA-FTP-Batch";
var flag = strMessage.endsWith("h");
var boolFlag = strMessage.endsWith("h");
console.log(flag);
console.log(boolFlag);
var numberType;
var strType;
var booleanType;
var arrayType;
var initializeArray = [1, 2, 3, 4];
var Weekday;
(function (Weekday) {
    Weekday[Weekday["MONDAY"] = 0] = "MONDAY";
    Weekday[Weekday["TUESDAY"] = 1] = "TUESDAY";
    Weekday[Weekday["WEDNESDAY"] = 2] = "WEDNESDAY";
    Weekday[Weekday["THURSDAY"] = 3] = "THURSDAY";
    Weekday[Weekday["FRIDAY"] = 4] = "FRIDAY";
})(Weekday || (Weekday = {}));
var weekday;
//# sourceMappingURL=tsc.js.map