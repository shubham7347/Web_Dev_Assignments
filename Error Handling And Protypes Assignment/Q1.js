function convertToNumber(str) {
    try {
      const number = Number(str);
      if (isNaN(number)) {
         throw Error("Invalid");
      }
      return number;
    } catch {
      return "Invalid number";
    }
  }
  const str = "123";
  const num = convertToNumber(str);
  console.log(num); // 123
  
  const str2 = "abc";
  const num2 = convertToNumber(str2);
  console.log(num2); // Invalid number  