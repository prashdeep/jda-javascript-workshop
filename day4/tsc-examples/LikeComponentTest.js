"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LikeComponent_1 = require("./LikeComponent");
var likes = new LikeComponent_1.LikeComponent(10, false);
likes.onClick();
likes.onClick();
likes.onClick();
console.log("Likes: " + likes.likeCount + " and isSelected: " + likes.isSelected);
