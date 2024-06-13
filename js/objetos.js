var trava = 0
var elemento_atual
var posicao


function random_element(a, b) {

    return Math.floor(Math.random() * (b - a + 1)) + a
}
function create_element(){


if (trava < 6) {
    trava++
    switch (random_element(0, 3)) {
        case 0:
            elemento_atual = document.getElementById(`elemento0`)
            elemento_atual.appendChild(document.createElement('article')).classList.add('elem0')
            break
        case 1:
            elemento_atual = document.getElementById(`elemento1`)
            elemento_atual.appendChild(document.createElement('article')).classList.add('elem1')


            console.log('1')
            break
        case 2:
            elemento_atual = document.getElementById(`elemento2`)
            elemento_atual.appendChild(document.createElement('article')).classList.add('elem2')


            console.log('2')
            break
        case 3:
            elemento_atual = document.getElementById(`elemento3`)
            elemento_atual.appendChild(document.createElement('article')).classList.add('elem3')

            console.log('3')
            break
    }
    posicao = elemento_atual.getBoundingClientRect()
    console.log(posicao)
}

else {
    console.log('fim!')

}
}


setInterval(() => {
    create_element()
}, 1000);

