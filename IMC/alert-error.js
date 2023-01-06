export const AlertError = {
     error:document.querySelector('.alert-error'),
  emptyOpen() {
    
    AlertError.error.innerHTML = 'Preencha todos os campos'
    AlertError.error.classList.add('open')
  },
  nanOpen() {
    AlertError.error.innerHTML = 'Digite apenas números'
    AlertError.error.classList.add('open')
  },
  close () {
    AlertError.error.classList.remove('open')
  }
}

