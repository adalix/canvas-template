const canvas = document.getElementById('myCanvas')
const ctx = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2 
}

const colors = []

addEventListener('mousemove', (e)=>{
    mouse.x = e.clientX
    mouse.y = e.clientY
})

addEventListener('resize',()=>{
    canvas.width = innerWidth
    canvas.height = innerHeight
})

class Particle{
    constructor(x, y, radius, color){
        this.x = x
        this.y = y 
        this.radius = radius
        this.color = color
    }
    draw(){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.closePath()
    }
    update(){
        this.draw()
    }
}

let particles
function init(){
    particles =[]
    for(let i = 0; i< 300; i++){
        particles.push()
    }
}

function animate (){
    requestAnimationFrame(animate)
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillText('canvas boilerplate', canvas.width / 2, canvas.height /2 )
    particles.forEach(particle => {
        particle.update()
    });
}

init()
animate()