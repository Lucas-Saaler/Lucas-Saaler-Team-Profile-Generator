const Employee =require("./Employee")

// Inherits name, id, and email from Employee
class Engineer extends Employee{
       constructor(name,id,email, gitHub, link){
           super(name,id,email)
           this.gitHub=gitHub 
           this.link=link
       }

       getRole(){
         return 'Engineer'
       }
}

module.exports=Engineer