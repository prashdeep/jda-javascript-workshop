var numbers = [20,45,67,22,43,12];

for(var i = 0; i < numbers.length; i++){
    if(numbers[i] > 50){
        //console.log(numbers[i]);
    }
}

var numberLessThan = function (number, val){
    return number < val;
}


var numberGT = function (number, val){
    return number > val;
}

var num = 20;
var result = numbers.filter(function(number){
    return numberGT(number, num)
}, num)
console.log(result);