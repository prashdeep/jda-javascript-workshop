var promise1 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('one'), 1000);
})

var promise2 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('two'), 2000);
})

var promise3 = new Promise((resolve, reject)=> {
    setTimeout(()=> resolve('three'), 4000);
})

/*let superPromise = Promise.race([promise1, promise2, promise3])

superPromise
    .then((response) => console.log(response))

console.log('Processing after all three promises have completed ');
*/

async function processResponse(){
    let res1 = await promise1;
    console.log('This line will be printed after promise1 is resolved ')
    let res2 = await promise2;
    console.log('This line will be printed after promise2 is resolved ')
    let res3 = await promise3;
    console.log('This line will be printed after promise3 is resolved ')

    console.log(`response 1 - ${res1}, response 2 - ${res2}, response 3 - ${res3}`)
}

processResponse()