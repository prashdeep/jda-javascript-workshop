
class Phone {

    constructor(private _price :number, private _model ?:string, private _desc?:string){
    }

    get price(){
        return this._price;
    }

    set price(price:number){
        this._price = price;
    }

    get desc(){
        return this._desc;
    }

    set desc(desc:string){
        this._desc = desc;
    }

    get model(){
        return this._model;
    }

    set model(model:string){
        this._model = model;
    }


    toString():string{
        return `Model: ${this._model }, desc: ${this._desc}, price: ${this._price}`
    }
}

let samsungA50 = new Phone(15000, "A50",'Latest phone');
let iPhone6S = new Phone(50000);
let vivo = new Phone(25000, 'Vivo-Plus')
samsungA50.desc  = 'Added the improved camera lense support';
let desc = samsungA50.desc;

