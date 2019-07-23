
/*
var employee = {
    id:0,
    name:'',
    age:0,
    salary:0,

    getId:function(){
        return this.id;
    },

    setId:function(id){
        this.id = id;
    },

    getName:function(){
        return this.name;
    },

    setName:function(name){
        this.name = name;
    }
}
*/

var _ = function(){
    var id = 0;
    var name ='';
    var age = 0;
    var salary = 0;//
    var company = 'SAP Labs';

    var obj = {
        setName:function(n){
            name = n;
        },
        getName: function(){
            return name;
        },
        getCompanyName: function(){
            return company;
        }
    }
    return obj;
}();

employee.setName('Harish');
console.log(employee.getName());
//obj.setName('Kiran')

//console.log(obj.getName());
//obj.setName('Kiran');
//console.log(obj.getName())   



//employee.setName('Kishore');
//employee.name = "Harish"
//console.log(employee.getName());