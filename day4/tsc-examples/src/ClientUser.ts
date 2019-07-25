import Post,{namedExport} from "./Post";

let post1 = new Post('Closures', 'Ravi');
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();
post1.like();

console.log(post1.noOfLikes);

post1.unlike();
post1.unlike();
post1.unlike();
post1.unlike();

console.log(`Number of updated Likes ${post1.noOfLikes}`)

namedExport('Called outside the module !!!!')