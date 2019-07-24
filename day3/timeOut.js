//setTimeout(()=> console.log('This will be returning after 2 seconds'),1000);

//console.log('This statement is already executed');

//using Promise

let handle = function(value){
   return new Promise((callBack1, callBack2)=>{
        setTimeout((value)=> {
            if (value){
            
                callBack1({
                "userId": 1,
                "id": 20,
                "title": "ullam nobis libero sapiente ad optio sint",
                "completed": true
            });
        } else {
            callBack2('Service temporarily down ....');
        }
        }, 4000, value);
    });
}


handle("http://github.com/users/1/profile")




.then(response=> console.log(response))
.catch(error=> console.log(`There was an error fetching the details. Please try after some time....`));

console.log("This will be printed before the response is fullfilled by the promise");