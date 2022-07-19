const Employee =require("./Employee")

// Inherits name, id, and email from Employee
class Intern extends Employee{
       constructor(name,id,email, school){
           super(name,id,email)
           this.school=school
       }

       getRole(){
         return 'Intern'
       }
}

module.exports=Intern