// Operate basic arithmetics operation and return result
const operate = (operatorType, num1, num2) => {

  switch (operatorType) {
    case '+':
      return parseFloat(num1) + parseFloat(num2);
    case '-':
      return parseFloat(num1) - parseFloat(num2);
    case '*':
      return parseFloat(num1) * parseFloat(num2);
    case '/':
      return parseFloat(num1) / parseFloat(num2);
    default:
      return 'Unknown operator';
  };  
};

// Get input value
const getDisplayValue = () => {
  const displayInput = document.querySelector('.display');
  return displayInput.value;
};

// Convert input value
const convertDisplayValue = (str) => {
  const newArr = str.split(' ');
  return newArr;
};

// Calculate the expression
const handleEqual = () => {
  const displayInputValue = convertDisplayValue(getDisplayValue());
  let result = operate(displayInputValue[1], displayInputValue[0], displayInputValue[2]);
  const displayInput = document.querySelector('.display');

  displayInput.value = +result.toFixed(5);
}


