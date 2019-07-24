let promise = fetch('https://jsonplaceholder.typicode.com/users');

promise
    .then(resp => console.log(`came inside the response block`),
          error => console.log(`came inside the error block`);
    )