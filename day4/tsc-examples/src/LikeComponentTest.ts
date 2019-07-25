import {LikeComponent} from './LikeComponent';

let likes = new LikeComponent(10, false);
likes.onClick();
likes.onClick();
likes.onClick();
console.log(`Likes: ${likes.likeCount} and isSelected: ${likes.isSelected}`);