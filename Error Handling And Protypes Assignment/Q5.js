 class Person {
        constructor(name = "Unknown", age = 0) {
          this.name = name;
          this.age = age;
        }
      
        getDetails() {
          return `Name : ${this.name}, Age: ${this.age} `;
        }
      }
      
      // Instantiate an instance of the Person class
      const person = new Person("John Doe", 25);
      
      // Call the getDetails method
      console.log(person.getDetails()); // Output: Name: John Doe, Age: 25
      
      // Instantiate another instance of the Person class without providing name and age
      const person2 = new Person();
      
      // Call the getDetails method
      console.log(person2.getDetails()); // Output: Name: Unknown, Age: 0
