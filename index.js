const inputValue = document.querySelector('.inputValue')
const inputResult = document.querySelector('.inputResult')
const valueButtons = document.querySelectorAll('.row button')
const operatorButtons = document.querySelectorAll('.violet-button')
const clearInput = document.getElementById('clear')
const resetInput = document.getElementById('reset')
const calculateButton = document.querySelector('.violet-button-iqual')

let currentInput = ''

valueButtons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.textContent
      if(buttonValue >= 0 && buttonValue <= 9){
        currentInput += buttonValue
        inputValue.value = currentInput
      }
     switch (buttonValue) {
      case '+':
      case '-':
      case 'x':
      case '/':
      case '+/-':
        case '%':
      currentInput += ` ${buttonValue} `;
      inputValue.value = currentInput;
        break;
      default:
        break;
     }
  })
})


calculateButton.addEventListener('click', () => {
  try {
    const result = calculateExpression(currentInput)
    inputResult.value = result
  } catch (error) {
    inputResult.value = 'Erro'
  }
})

clearInput.addEventListener('click', () => {
  currentInput = currentInput.slice(0, -1)
  inputValue.value = currentInput
})

resetInput.addEventListener('click', () => {
  currentInput = ''
  inputValue.value = currentInput
  inputResult.value = currentInput

})

function calculateExpression(expression){
  const parts = expression.split(' ')
  let result = parseFloat(parts[0])

  for(let i = 1; i < parts.length; i += 2){
    const operator = parts[i];
    const operand = parseFloat(parts [ i + 1])
    switch (operator) {
      case '+':
        result += operand
        break;
      case '-':
        result -= operand
        break;
      case 'x':
        result *= operand;
        break;
      case '/':
        result /= operand;
        break;
      case '+/-':
        result -= operand;
        break;
      case '%':
        result = result * (operand / 100);
        break;
    }
  }

  return result

}