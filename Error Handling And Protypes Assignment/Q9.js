function numberChecker(numbers) {
    return function(number) {
      return numbers.includes(number);
    };
  }

  
  const numbers = [1, 2, 3, 4, 5];
  const checkNumber = numberChecker(numbers);
  
  console.log(checkNumber(3)); // Output: true
  console.log(checkNumber(6)); // Output: false