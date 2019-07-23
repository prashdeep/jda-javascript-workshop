var outerFunction = function(billAmount){
    var tax = 10;
    var that = this;
    console.log('this in the context of outer function '+ this.name);
    var innerFunction = function(tip){
        console.log('the definition of this in the context of inner function '+that.name);
        return (billAmount + (tax/100 * billAmount) )+ tip;
    }

   /* var oneMoreInnerFunction = function(fn){
        return fn;
    }
    return oneMoreInnerFunction(innerFunction);
    */
   return innerFunction;
}

var obj={name:'local object'};
var innerFunc = outerFunction.call(obj, 100);

var res = innerFunc(20);

//console.log(res);

//console.log(outerFunction(200)(10))