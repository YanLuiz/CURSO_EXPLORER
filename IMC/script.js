import { AlertError } from './alert-error.js'
import { Modal } from './modal.js'



// variáveis

const form = document.querySelector('form')
const inputWeight = document.querySelector('#weight')
const inputHeight = document.querySelector('#height')




form.onsubmit = function (e) {
  e.preventDefault()
  
  const weight = inputWeight.value
  const height = inputHeight.value
  

  

  if(notNumber(weight) == 'empty' || notNumber(height) == 'empty') {
    AlertError.emptyOpen()
    return;
  }else if(notNumber(weight) || notNumber(height)){
    AlertError.nanOpen()
    return
  }else {
    AlertError.close()

    const result = IMC(weight, height)
    const message = `Seu IMC é de ${result}`
    Modal.message.innerText = message
  
   Modal.open()
  }
  
}

function notNumber(value) {
    if(value ===''){
      return 'empty'
    }
    else{
      return isNaN(value)
    }
}


function IMC(weight, height) {
  return (weight / ((height / 100) ** 2)).toFixed(2)
}

inputHeight.oninput = function() {
  AlertError.close();
}

inputWeight.oninput = function () {
  AlertError.close();
}