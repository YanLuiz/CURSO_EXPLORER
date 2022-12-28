let dados
let entrada = 0 
alert(`Olá usuário digite o número da opção desejada
1.Cadastrar um item na lista
2.Mostrar itens cadastrados
3.Sair do programa`)

let lista = []

while(entrada !=3 ){
  entrada = prompt(`digite o número da opção desejada
  1.Cadastrar um item na lista
  2.Mostrar itens cadastrados
  3.Sair do programa`)

  switch(entrada){
    case '1':
      dados = prompt('digite o item a ser adicionado na lista')
      lista.push(dados)
      alert('item cadastrado com sucesso')
      break
    case '2':
      if(lista.length> 0) {
        alert(lista)
      }else {
        alert('lista vazia')
      }
      break;
    case '3':
      alert('a sua seção foi encerrada')
      break;

    default:
      alert('opção inválida')
  }
}