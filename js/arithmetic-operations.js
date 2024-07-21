// Operate basic arithmetics operation and return result
const operations = (operatorType, num1, num2) => {
  
  switch (operatorType) {
    case '+':
      return parseInt(num1) + parseInt(num2);
    case '-':
      return parseInt(num1) - parseInt(num2);
    case '*':
      return parseInt(num1) * parseInt(num2);
    case '/':
      return parseInt(num1) / parseInt(num2);
    default:
      return 'Unknown operator';
  };
};