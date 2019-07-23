

var hoistingDemo = function(){
    var index;
    console.log('The value of index in'+ 
    'the beginning of the function should give error '+ index);
    //console.log('Let try with another variable which is not declared '+ flag);

    for(index = 0; index < 10; index++){
        console.log('Inside the definition of for :'+index);
    }

    console.log('The value of index should not be valid here '+ index);
}
//console.log('The definition of index outside the function is '+ index);

//hoistingDemo();


alertUser();

function alertUser(){
    console.log('alert message ....');
}