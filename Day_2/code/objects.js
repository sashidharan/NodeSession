// Object Literals
var sample = {
    firstName: 'Node',
    lastName: 'Js',
    execute: function(){
        console.log('Hello '+ this.firstName + this.lastName);
    }
}
sample.execute();
console.log(sample.firstName);