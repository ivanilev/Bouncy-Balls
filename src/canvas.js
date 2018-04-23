import {Helper} from './Helper'
import {Ball} from './Ball'
import {TestDev} from './test-dev'

if (process.env.NODE_ENV.trim() === 'development') {
     TestDev.logEnvironment();
}

// Initial Setup
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

// Variables
const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Implementation
//let objects
function init() {
    objects = []

    for (let i = 0; i < 400; i++) {
        // objects.push();
    }
}

// Animation Loop
function animate() {
    // requestAnimationFrame(animate)
    
    // c.clearRect(0, 0, canvas.width, canvas.height)

    // c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    // objects.forEach(object => {
    //  object.update();
    // });
}

init()
animate()
