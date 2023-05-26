    class Employee {
        constructor(name, Position, Salary) {
          this.name = name;
          this.Position = Position; 
          this.Salary = Salary;
        }
      
        getSalary(){
            return this.Salary;
        }
      }
      
      // Instantiate an instance of the Employee class
      const Employee1 = new Employee('Sarthak', 'SDE1', 80222);
      
      // Call the getSalary method
      console.log(Employee1.getSalary());// o/p - 80222/