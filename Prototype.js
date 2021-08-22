function Student(){
this.name='john';
this.gender='M';
this.any=()=>{
    return this.name;
}

}
Student.prototype.age = 15;
const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName : ()=> {
      return this.firstName + " " + this.lastName;
    }
    //default binding isn't happening in  this because we are using fat arrow function
  };
  
  // Display data from the object:
  console.log(person.fullName());
var s1=new Student();
Student.prototype.SayHi=function(){

 return 1;
}
console.log(s1.age);
Student.prototype = { age : 20 }; //whole defination is changed to just age:atttribute
console.log(s1.age);
var s2=new Student();
s2.carName="teslaX";
console.log(s2.SayHi);
console.log(s1.SayHi());// only for new object defination is changed.
console.log(s1.any());
console.log(s2.age);

console.log(s2.carName);