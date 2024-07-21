// Create buttons for numbers
const createNumericalButtons = () => {
  const numericalButtons = document.querySelector('.numerical-buttons');
  
  for (let i = 0; i < 12; i += 1) {
    const button = document.createElement('button');    

    button.textContent = `${i}`;
    button.setAttribute('class', `numerical-button number-${i} button`);

    if (i === 10) {
      button.textContent = '.';
      button.setAttribute('class', `numerical-button dot button`);
    } else if (i === 11) {
      button.textContent = '=';
      button.setAttribute('class', `numerical-button equal button`);
    }

    numericalButtons.appendChild(button);    
  }

};

// Create buttons for basic operator (* / + -)
const createOperatorButtons = () => {
  const operators = document.querySelector('.operators');

  for (let i = 0; i < 5; i += 1) {
    const button = document.createElement('button');

    switch (i) {
      case 0:
        button.textContent = '*';
        button.setAttribute('class', 'operator-button multiplication button');
        break;
      case 1:
        button.textContent = '/';
        button.setAttribute('class', 'operator-button division button');
        break;
      case 2:
        button.textContent = '+';
        button.setAttribute('class', 'operator-button add button');
        break;
      case 3:
        button.textContent = '-';
        button.setAttribute('class', 'operator-button subtraction button');
        break;
      case 4:
        button.textContent = 'Clear';
        button.setAttribute('class', 'operator-button clear button');
    }
    operators.appendChild(button);    
  }  
};

// Clear the display of the calculator
const clearCalculator = () => {
  const display = document.querySelector('.display');
  display.value = '';
};

// Start the calculator
createNumericalButtons();
createOperatorButtons();

// Clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalculator);

