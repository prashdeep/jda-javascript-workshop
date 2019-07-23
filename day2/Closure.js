/*var calculateTotalAmount = function(billAmount){

    var serviceTaxFun = function(taxInPercentage){
        var billIncludingTax = billAmount + (taxInPercentage/100 * billAmount);
        var tipFunction = function(tip){
           // console.log('Total bill amount inclusive of tip and Tax is '+ (billIncludingTax + tip));
           return billIncludingTax + tip;
        }
        return tipFunction;
    }
    return serviceTaxFun;
       
}
*/

var calculateTotalAmount = function(billAmount, serviceTaxFun){

    return serviceTaxFun(billAmount);
       
}

var serviceTaxFun = function(billAmount, taxInPercentage){
    var billIncludingTax = billAmount + (taxInPercentage/100 * billAmount);
    return billIncludingTax;
}

var serviceTaxFun18 = function (billAmount){return serviceTaxFun(billAmount, 18)};
var serviceTaxFun20 = function(billAmount){ return serviceTaxFun(billAmount, 20)};

var tipFunction = function(tip){
    // console.log('Total bill amount inclusive of tip and Tax is '+ (billIncludingTax + tip));
    return billIncludingTax + tip;
}

var result1 = serviceTaxFun(100, 18);
var result2 = serviceTaxFun18(100);

console.log('result 1 ' + result1);
console.log('result 2 ', result2);

