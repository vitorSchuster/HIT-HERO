var posição_elementos = ["0", "1", "2", "3"]

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

//elementos "obstacúlos"

setInterval(() => {
  
function randomElement(a, b) {
  return Math.floor(Math.random() * (b - a + 1)) + a
}
switch (randomElement(0, 3)) {
  case 0:
    var elem = document.getElementById(`elemento0`)

    console.log(posição_elementos[0])
    break
  case 1:
    var elem = document.getElementById(`elemento1`)
    console.log(posição_elementos[1])
    break
  case 2:
    var elem = document.getElementById(`elemento2`)
    console.log(posição_elementos[2])
    break
  case 3:
    var elem = document.getElementById(`elemento3`)
    console.log(posição_elementos[3])
    break

    
}
}, 1000);

// filho.classList.add(`filho`);//adiciona classe
// var elem = document.getElementById(`lista${linha}`)
// const filho = elem.appendChild(document.createElement(`p`));

