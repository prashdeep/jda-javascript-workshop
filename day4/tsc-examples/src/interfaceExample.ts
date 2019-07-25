function printLabel(labelledObj:{label:string}){
    console.log(labelledObj.label);
}


interface LabelInterface{
    label:string;
}

function newPrintLabel(labelType:LabelInterface){
    console.log(labelType.label)
}

let labelObj = {label:"Welcome to Typescript training"};

newPrintLabel(labelObj);

interface Point {
    readonly x: number;
    readonly y: number;
}

let readonlyObj:Point={x:10, y:20};
// readonlyObj.x = 45; - error

let a:number[]=[1,2,3,4,5];
let ro: ReadonlyArray<number> = a;
//ro[0]=10;
let lenth:number = ro.length;


interface SquareConfig {
    color?: string;
    width?: number;

//    test(source: string, subString: string): boolean;
}

function createSquare(config: SquareConfig) {
    // ...
}   

let interfaceObj:SquareConfig = {
    color:"green",
    width:200,

  /*  test:function(src, sub) {
        let result = src.search(sub);
        return result > -1;
    }*/
 
}

let mySquare = createSquare({colour: "red", width: 100,  } as SquareConfig);
let mySquareObj={ colour: "red", width: 100 };

createSquare(mySquareObj);

interface Shape {
    color: string;
}

interface Square extends Shape {
    sideLength: number;
}

let squareObj = <Square>{};
squareObj.color = "blue";
squareObj.sideLength = 10;




interface PenStroke {
    penWidth: number;
}

interface Square extends Shape, PenStroke {
    sideLength: number;
}

let square = <Square>{};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;