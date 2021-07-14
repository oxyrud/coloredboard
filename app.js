const board =document.querySelector('#board')
const SQUARE_NUMBER = 600
const colors = ['#4ad100','#5de000','#6ff000','#80ff00','#91ff27','#a1ff3d','#abe658','#c8cb81','#ddaea3','#ec8ec2','#f864e1','#f0f']

for (let i=0; i< SQUARE_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add ('square')

    square.addEventListener('mouseover', setColor)

    square.addEventListener('mouseleave',removeColor)

    board.append(square)
}

function setColor(event) {
    const element = event.target
    const color = getRandomColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(event) {
    const element = event.target
    element.style.backgroundColor ='#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getRandomColor() {
    return colors[ Math.floor(Math.random() * colors.length)]
    
}