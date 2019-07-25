"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Post = /** @class */ (function () {
    function Post(_title, _authorName, _noOfLikes) {
        var _this = this;
        if (_noOfLikes === void 0) { _noOfLikes = 0; }
        this._title = _title;
        this._authorName = _authorName;
        this._noOfLikes = _noOfLikes;
        this.like = function () {
            _this._noOfLikes++;
        };
        this.unlike = function () {
            _this._noOfLikes--;
        };
    }
    Object.defineProperty(Post.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "authorName", {
        get: function () {
            return this._authorName;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "noOfLikes", {
        get: function () {
            return this._noOfLikes;
        },
        enumerable: true,
        configurable: true
    });
    return Post;
}());
exports.default = Post;
function namedExport(arg) {
    console.log(arg + " is exported");
}
exports.namedExport = namedExport;
