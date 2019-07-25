function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
function newPrintLabel(labelType) {
    console.log(labelType.label);
}
var labelObj = { label: "Welcome to Typescript training" };
newPrintLabel(labelObj);
var readonlyObj = { x: 10, y: 20 };
// readonlyObj.x = 45; - error
var a = [1, 2, 3, 4, 5];
var ro = a;
//ro[0]=10;
var lenth = ro.length;
function createSquare(config) {
    // ...
}
var interfaceObj = {
    color: "green",
    width: 200,
};
var mySquare = createSquare({ colour: "red", width: 100, });
var mySquareObj = { colour: "red", width: 100 };
createSquare(mySquareObj);
var squareObj = {};
squareObj.color = "blue";
squareObj.sideLength = 10;
var square = {};
square.color = "blue";
square.sideLength = 10;
square.penWidth = 5.0;
