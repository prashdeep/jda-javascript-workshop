export class Car{
    color:string;
    make:string;
    wheels:number;
    speed:number;

    constructor(){
        this.color = "RED",
        this.make = "HONDA",
        this.wheels = 4,
        this.speed = 0;
    }

    accelerate = () => this.speed++;
    slowDown = ()=> this.speed--;
    stop= () => this.speed = 0;
}

export class Employee{
   constructor(private _name:string, private dept:string, private age:number){
   }
   get name():string{
        return this.name;
   }
   set name(name){
    this._name = name;
}


    private applyLeave(noOfDays: number){
        console.log("Applying for `{number}` of days holiday");
    }
}

let carObj = new Car();
carObj.accelerate();
carObj.accelerate();

console.log(carObj.speed);