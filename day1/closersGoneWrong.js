var idGenerator = function(employees){
    var empId = 100;
    for (var i = 0; i < employees.length; i++){
        employees[i]['id']= function(){
            return ++empId;
        }()
    }
    return employees;
}

var employees = [
    {
        id:0,
        name:'Ram'
    },
    {
        id:0,
        name:'Vinay'
    },
    {
        id:0,
        name:'Kiran'
    }
]

var employeesWithIds = idGenerator(employees);

console.log(employeesWithIds[0].id)
