let promise = fetch('https://jsonplaceholder.typicode.com/users')
const rootElem = document.querySelector('#users');
promise
    .then(response => response.json())
    .then(users => users.map((user)=>`<li>${user.name} X</li> `))
    .then(data => data.join(''))
    .then(data => rootElem.innerHTML = `<ul>${data}</ul>`);

document.querySelector('#name').addEventListener('change', function(event){
    console.log(`coming inside the click event handler `, event.target.value)
})