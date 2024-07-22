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
      button.textContent = ' = ';
      button.setAttribute('class', `numerical-button equal button`);
    }
    numericalButtons.appendChild(button);    
  }
};

// Create buttons for basic operator (* / + -)
const createOperatorButtons = () => {
  const operators = document.querySelector('.operators');

  for (let i = 0; i < 6; i += 1) {
    const button = document.createElement('button');

    switch (i) {
      case 0:
        button.textContent = ' * ';
        button.setAttribute('class', 'operator-button multiplication button');
        break;
      case 1:
        button.textContent = ' / ';
        button.setAttribute('class', 'operator-button division button');
        break;
      case 2:
        button.textContent = ' + ';
        button.setAttribute('class', 'operator-button add button');
        break;
      case 3:
        button.textContent = ' - ';
        button.setAttribute('class', 'operator-button subtraction button');
        break;
      case 4:
        button.textContent = ' ⌫ ';
        button.setAttribute('class', 'operator-button backspace button');
        break;
      case 5:
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

// Display numerical values when click
const handleButtons = () => {
  const buttons = document.querySelectorAll('.button');
  const display = document.querySelector('.display');

  display.value = '';
  
  for (let i = 0; i < buttons.length; i += 1) {
    buttons[i].addEventListener('click', (event) => {
      if (event.target.textContent !== ' = ' && event.target.textContent !== 'Clear')
      display.value += event.target.textContent;
    });
  }
};

// Start the calculator
createNumericalButtons();
createOperatorButtons();

// Display numerical value when button is clicked
handleButtons();

// Apply event onto Clear button
const clearButton = document.querySelector('.clear');
clearButton.addEventListener('click', clearCalculator);

// Apply event onto Clear button
const equalButton = document.querySelector('.equal');
equalButton.addEventListener('click', handleEqual);

