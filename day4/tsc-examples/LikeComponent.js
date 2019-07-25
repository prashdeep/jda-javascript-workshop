"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent = /** @class */ (function () {
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
exports.LikeComponent = LikeComponent;
