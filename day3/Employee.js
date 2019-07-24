class Employee {
    constructor(_id, _name, _salary){
        this._id = _id;
        this._name = _name;
        this._salary = _salary;
    }

    get id(){
        console.log(`came inside the get Id method of Employee....`)
        return this._id;
    }

    set id(id){
        this._id = id;
    }

    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set salary(salary){
        this._salary = salary;
    }

    computeAnnualSalary(){
        return this.salary * 12;
    }
}

class RegularEmployee extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
    }
}

class RegularEmployee extends Employee{
    constructor(id, name, salary){
        super(id, name, salary);
    }
}

const maneesh = new Employee(23, "Maneesh", 20000);
const kiran = new Employee(33, "Kiran", 50000);
const ram = new Employee(53, "Ram", 70000);

console.log(ram.id)

Array.of(maneesh, kiran, ram).forEach(emp => console.log(`${emp.name}`))