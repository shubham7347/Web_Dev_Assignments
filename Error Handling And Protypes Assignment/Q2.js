 function getPerson(person) {
        try {
          if (typeof person !== 'object' || !person.name || !person.age) {
            throw new Error('Invalid parameter type');
          }
      
          return `Name: ${person.name}, Age: ${person.age}`;
        } catch (error) {
          return error.message;
        }
      }


        const person1 = { name: 'John Doe', age: 25 };
        console.log(getPerson(person1)); // Output: Name: John Doe, Age: 25

        const person2 = { name: 'Jane Smith' };
        console.log(getPerson(person2)); // Output: Invalid parameter type

        const person3 = 'Invalid Person';
        console.log(getPerson(person3)); // Output: Invalid parameter type