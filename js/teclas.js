var tecla_atual
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'w':
    case 'W':
      tecla_atual = document.getElementById('teclaW')
      tecla_atual.style.backgroundColor = "blue"

      break;
    case 'a':
    case 'A':
      tecla_atual = document.getElementById('teclaA')
      tecla_atual.style.backgroundColor = "blue"

      break;
    case 's':
    case 'S':
      tecla_atual = document.getElementById('teclaS')
      tecla_atual.style.backgroundColor = "blue"
      break;
    case 'd':
    case 'D':
      tecla_atual = document.getElementById('teclaD')
      tecla_atual.style.backgroundColor = "blue"

      break;
  }
posicao = tecla_atual.getBoundingClientRect()
console.log(posicao)
});

document.addEventListener('keyup', function (event) {
  switch (event.key) {
    case 'w':
    case 'W':
      document.getElementById('teclaW').style.backgroundColor = "var(--cor-tecla)"
      break;
    case 'a':
    case 'A':
      document.getElementById('teclaA').style.backgroundColor = "var(--cor-tecla)"

      break;
    case 's':
    case 'S':
      document.getElementById('teclaS').style.backgroundColor = "var(--cor-tecla)"
      break;
    case 'd':
    case 'D':
      document.getElementById('teclaD').style.backgroundColor = "var(--cor-tecla)"

      break;
  }

});

