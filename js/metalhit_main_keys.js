
document.addEventListener('keydown', function (event) {
  switch (event.key) {
    case 'w':
    case 'W':
      document.getElementById('teclaW').style.backgroundColor = "blue"
    break;
    case 'a':
    case 'A':
      document.getElementById('teclaA').style.backgroundColor = "blue"

      break;
    case 's':
    case 'S':
      document.getElementById('teclaS').style.backgroundColor = "blue"
      break;
    case 'd':
    case 'D':
      document.getElementById('teclaD').style.backgroundColor = "blue"

      break;
  }

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