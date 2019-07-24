const player=['Virat','India', 'T20-World cup', 450];
/*const name = player[0];
const teamName = player[1];
const tournamentName = player[2];
const runsScored = player[3];*/

const [name, team, tournamentName, runsScored] = player;

/*console.log(`
    ${name} played for ${team} 
    in ${tournamentName} 
    and has scored ${runsScored}`);*/

let batsman='Sachin';
let runner='Ganguly' ;

[batsman, runner] = [runner,batsman];

//console.log(`batsman is ${batsman} and runner is ${runner}`);

let str="Pradeep,Bangalore,classpath-consulting";

const [mentor, city, company] = str.split(',');

console.log(`${mentor} coming from ${city} from ${company}`);




