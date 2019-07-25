let promise = fetch('https://jsonplaceholder.typicode.com/users')
const rootElem = document.querySelector('#users');
let data = [];
promise
    .then(response => response.json())
    .then(users => {
        data =  users;
        return users.map((user)=>`<li>${user.name} X</li> `)})
    .then(data => data.join(''))
    .then(data =>  {
        console.log('data is ')
        console.log(data);
        users = data;
        rootElem.innerHTML = `<ul>${data}</ul>`
    });

document.querySelector('#name').addEventListener('keyup', function(event){
    console.log(`coming inside the click event handler `, event.target.value);
    console.log(data)
    let filteredUsers = data
        .filter(user => { return user.name.startsWith(event.target.value)})
        .map((user)=>`<li>${user.name} X</li> `)
    rootElem.innerHTML = `<ul>${filteredUsers}</ul>`
    
})