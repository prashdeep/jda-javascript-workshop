var Phone = /** @class */ (function () {
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
