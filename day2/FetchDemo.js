let promise = fetch('https://jsonplaceholder.typicode.com/users');

promise.then(response => { 
    let jsonPromise = response.json();
    jsonPromise.then(data => console.log(data))
});

console.log('This message should be printed before fetching the data from making http call.')