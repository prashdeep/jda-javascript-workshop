let numbers=[1,2,3,4];

let iterator = numbers[Symbol.iterator]();
let flag = true;
while (flag ){
    let obj = iterator.next();
    if (obj.done){
        flag = false;
        continue;
    }
    console.log(obj);
}