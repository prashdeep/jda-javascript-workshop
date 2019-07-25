
const PI = 3.142;

let calculateArea = ({length:l = 45, breadth:b = 24, radius:r = 12}:Shape, type:Type):number => {
    switch(type){
        case Type.CIRCLE:
            return PI * r * r;
        case Type.SQUARE:
            return l * l;
        case Type.RECTANGLE:
            return l * b;        
    }
    return 0;
}

interface Shape {
    length?:number
    breadth?:number
    radius?:number
}

enum Type{
    CIRCLE,
    SQUARE,
    RECTANGLE
}

let result = calculateArea({radius:45}, Type.CIRCLE);
console.log(`Result is ${result}`)