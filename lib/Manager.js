const Employee =require("./Employee")

// Inherits name, id, and email from Employee
class Manager extends Employee{
       constructor(name,id,email, officeNumber){
           super(name,id,email)
           this.officeNumber=officeNumber 
       }

       getRole(){
         return 'Manager'
       }
}

module.exports=Manager