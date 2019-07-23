const players=['Virat','Rohit','Dhoni','Hardik'];

//const captain = players[0];
//const vCaptain = players[1];

[captain, vCaptain] = players;
//swappping variables
[captain, vCaptain] = [vCaptain, captain];

//console.log(`captain is ${captain} and Vice captain is ${vCaptain}`)

var user={
    "id": 10,
    "name": "Clementina DuBuque",
    "username": "Moriah.Stanton",
    "email": "Rey.Padberg@karina.biz",
    "address": {
      "street": "Kattie Turnpike",
      "suite": "Suite 198",
      "city": "Lebsackbury",
      "zipcode": "31428-2261",
      "geo": {
        "lat": "-38.2386",
        "lng": "57.2232"
      }
    },
    "phone": "024-648-3804",
    "website": "ambrose.net",
    "company": {
      "name": "Hoeger LLC",
      "catchPhrase": "Centralized empowering task-force",
      "bs": "target end-to-end models"
    }
  }

  //let name = user.name;
  //let phone = user.phone;
  const { name:username, phone: userphone,website:web} = user;
console.log(`${username} with ( ${userphone} ) and having website with domain ${web}`)

let displayUserName = function({usernam:username} = {username:'Default User'}){
    console.log(`${username}`)
}

displayUserName(user);
