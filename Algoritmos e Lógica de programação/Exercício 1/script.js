
let numberOne = prompt('digite o primeiro numero')
let numberTwo = prompt('digite o segundo numero')
numberOne = Number(numberOne)
numberTwo = Number(numberTwo)
let oddPair

if((numberOne + numberTwo) %2==0){
  oddPair = 'PAR'
}else {
  oddPair = 'IMPAR'
}

alert(`A SOMA DOS NUMEROS E ${numberOne + numberTwo}
A SUBTRACAO DOS NUMEROS E ${numberOne - numberTwo}
A MULTIPLICACAO DOS NUMEROS E ${numberOne * numberTwo}
A DIVISAO DOS NUMEROS E ${numberOne / numberTwo}
O RESTO DA DIVISAO DOS NUMEROS E ${numberOne % numberTwo}
A SOMA DOS NUMEROS E ${oddPair}`)