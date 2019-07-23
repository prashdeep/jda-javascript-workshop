let outerFunc = function(name){
    console.log(arguments +' inside the outer function')
    console.log(`${this.id} inside the context of outer function `);
    let inner = () => {
        console.log(arguments+'  is not available for arrow functions')
        console.log(`${this.id} inside the context of inner function `)
    }
    inner();
}

let arrowFun = function(name){
    console.log(arguments);
    console.log(name);
}

//outerFunc.call({id:34}, 45);

arrowFun("name");