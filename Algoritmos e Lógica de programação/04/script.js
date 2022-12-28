let contador = 1;
let numero
const sorteado = Math.floor(Math.random() * (10 - 1) + 1);
alert
while (1) {
  numero = prompt('que número estou pensando')
  if(Number(numero) == sorteado) {
    if(contador == 1){
      alert(`parabéns você acertou de primeira!!!`)
      break;
    }
    alert(`parabéns você acertou em ${contador} tentativas`)
    break;
  }else {
    contador++;
    alert('voce errou, tente de novo')
  }



}
