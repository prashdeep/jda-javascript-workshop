function letDemo(){

    let flag = true;
    if (flag){
        let message = "Flag is set to true";
    }
    for ( let i = 0; i < 10; i ++){}
    //console.log(message);
    console.log(i);
}
//letDemo();

function constDemo(){
    const PI=3.142;
    let area=function(radius){
        //PI = 4; This will lead to an error
        return PI * radius * radius
    }
    return area;
}

let innerFunc = constDemo();
console.log(`The area of the circle is ${innerFunc(10)}`);