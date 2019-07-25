interface Fly{
    fly():string;
}


class Plane implements Fly {

    fly():string{
        return `Flying by plane`;
    }
    
    getNumberOfPassengers():number{
        return 50;
    }
}

let plane:Plane = new Plane();
plane.fly();

plane.