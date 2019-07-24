var promise = function(time, flag){
    return new Promise(function(resolve, reject){
        setTimeout(function(flagVal){
            if(flagVal){
                resolve(5000);
            } else {
                reject('There is some error processing your request. Please try after some time ..')
            }
        }, time * 1000, flag)
    })
}

var result = promise(2, true);

result
    .then(data => console.log(data))
    .catch(error => console.log(error))