const depts=['HR','Transport','Finance','Payroll'];
const projectTeams=['MedLife','Hitachi','SAP-Labs'];

const consoliatedTeams=[...depts , ...projectTeams];

//console.log(consoliatedTeams);

const cities=[...['bangalore','mangalore','hubballi','belgaum'],...['Hyderabad','Vijayawada','Vizag','Kurnool'],...['chennai','madurai','selam']];
//console.log(cities);

//const company = "Tata consultancy services";

function argsDemo(a){
    console.log('came inside the argsDemo')
    console.log(...arguments);
};

//console.log([...'welcome']);

//Rest operator

function compute(fun, ...params){
    fun(params);
}

let sum=function(p){
    console.log(p.reduce ((o,n)=> o+n,0));
}

//compute(sum, 2, 3, 89,78);

function printResult(first, second, third, ...rest){
    console.log(`First position is ${first}`);
    console.log(`Second position is ${second}`);
    console.log(`Third position is ${third}`);
    console.log(`Rest ${rest}`)
}

printResult('Naveen','vinay','kiran','avinash','sakshi','smitha');


