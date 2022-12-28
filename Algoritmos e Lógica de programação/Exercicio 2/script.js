
let alunos = []

let opcao = 0;
let informacoes = {
  'nome': '',
  'nota1': '',
  'nota2': ''
}


while(opcao != 4) {
opcao = prompt(`Sistema de cadastro de alunos
digite uma das opcoes abaixo

1.cadastrar novo aluno
2.visualizar dados do aluno
3.alterar dados dos alunos
4.encerrar a seção`)


  switch(opcao) {
    case '1':
    
      let dados = prompt('digite o nome do aluno')
      informacoes.nome = dados;
      dados = Number(prompt('digite a primeira nota'))
      informacoes.nota1 = dados
      dados = Number(prompt('digite a segunda nota'))
      informacoes.nota2 = dados
      alunos.push(informacoes)
      break;
    case '2':
      for(let j = 0; j < alunos.length;j++) {
        alert(`nome do aluno ${alunos[j].nome}
        primeira nota do aluno ${alunos[j].nota1}
        segunda nota do aluno ${alunos[j].nota2}
        media final do aluno ${(alunos[j].nota1 + alunos[j].nota2) / 2}`)
      }
      break;
    case '3':
      let nome = prompt('digite o nome do aluno a ter os dados alterados')
      for(let j = 0; j< alunos.length; j++) {
        if(alunos[j].nome == nome) {
          alunos[j].nota1 = prompt('digite a nota 1')
          alunos[j].nota2 = prompt('digite a nota 2')

          break;
        }
        
      }
      alert('dados atualizados com sucesso')
      break;

    case '4':
      alert('Seção encerrada com sucesso')
  
    default:
      alert('opcao invalida')
  }

}