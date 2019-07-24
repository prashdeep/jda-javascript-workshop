var promise = fetch('https://jaceholder.typicode.com/users');

promise
    .then(resp => {
        console.log(`came inside the response block`);
        if (resp.status == 200){
            return resp.json();
        }
    },
          error => {
              console.log(`came inside the error block`);
              return;
        }
    )
    .catch(error => console.log('should be handled here ....'))
    .then(data => data.map(user => user.name).forEach(element => {
        console.log(element)
    }, err => console.log('error processing the response '+err)))
    .catch(error => console.log('There was an error fetching the response'+ error))
    .finally(()=> console.log('Finally block executed ....'))
    
