const createNumericalButtons = () => {
  const numericalButtons = document.querySelector('.numerical-buttons');
  
  for (let i = 0; i < 10; i += 1) {
    const button = document.createElement('button');    

    button.textContent = `${i}`;
    button.setAttribute('class', `numerical-button number-${i}`);
    numericalButtons.appendChild(button);    
  }

};
createNumericalButtons();