const slide = document.querySelector('.slide');
const itens = slide.querySelectorAll('.slide-item');

let contador = 0;

function trocarSlide() {
  // remove a classe 'active' do item atual
  itens[contador].classList.remove('active');

  // incrementa o contador e verifica se já passou por todos os itens
  contador++;
  if (contador >= itens.length) {
    contador = 0;
  }

  // adiciona a classe 'active' para o novo item
  itens[contador].classList.add('active');
}

// define um intervalo para chamar a função 'trocarSlide' a cada 3 segundos
setInterval(trocarSlide, 2000);
