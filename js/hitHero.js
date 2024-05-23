
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
var trava = 0 

setInterval(() => {
  
function randomElement(a, b) {
  trava++
  return Math.floor(Math.random() * (b - a + 1)) + a
}
if(trava <6){

switch (randomElement(0, 3)) {
  case 0:
    document.getElementById(`elemento0`).appendChild(document.createElement('article')).classList.add('elem0')
    break
  case 1:
    document.getElementById(`elemento1`).appendChild(document.createElement('article')).classList.add('elem1')

   
    console.log('1')
    break
  case 2:
    document.getElementById(`elemento2`).appendChild(document.createElement('article')).classList.add('elem2')

    
    console.log('2')
    break
  case 3:
    document.getElementById(`elemento3`).appendChild(document.createElement('article')).classList.add('elem3')

    console.log('3')
    break
  }
}

else{
  console.log('fim!')
  
}

},1000);



