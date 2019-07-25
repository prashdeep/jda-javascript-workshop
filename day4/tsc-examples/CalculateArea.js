var calculateArea = function (_a, type) {
    var _b = _a.length, l = _b === void 0 ? 45 : _b, _c = _a.breadth, b = _c === void 0 ? 24 : _c, _d = _a.radius, r = _d === void 0 ? 12 : _d;
    switch (type) {
        case Type.CIRCLE:
            return 3.142 * r * r;
        case Type.SQUARE:
            return l * l;
        case Type.RECTANGLE:
            return l * b;
    }
    return 0;
};
var Type;
(function (Type) {
    Type[Type["CIRCLE"] = 0] = "CIRCLE";
    Type[Type["SQUARE"] = 1] = "SQUARE";
    Type[Type["RECTANGLE"] = 2] = "RECTANGLE";
})(Type || (Type = {}));
var result = calculateArea({ radius: 45 }, Type.CIRCLE);
console.log("Result is " + result);
