// Reference to the Canvas object (see html)
const canvas = document.querySelector('canvas') 

// 2D rendering context
const ctx = canvas.getContext('2d') 

// dimensions of the canvas
const CANVAS_WIDTH = canvas.width 
const CANVAS_HEIGHT = canvas.height 

// radius of the ball
const RADIUS = 10 

// Render black background
function renderBackground() {
ctx.fillStyle = 'black' 
ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT) 
}

// Render ball at the position (x,y)
function renderBall(x, y) {
ctx.beginPath() 
ctx.arc(x, y, RADIUS, 0, 2 * Math.PI) 
ctx.fillStyle = 'red' 
ctx.fill() 
}

// Render the paddle at position (x,y)
function renderPaddle(x,y) {
ctx.fillStyle = 'white' 
ctx.fillRect(x, y, 15, 70) 
}
// Render dashed line
function renderDashedLine() {
  ctx.setLineDash([5, 15])
  ctx.beginPath()
  ctx.moveTo(CANVAS_WIDTH / 2, 0)
  ctx.lineTo(CANVAS_WIDTH / 2, CANVAS_HEIGHT)
  ctx.strokeStyle = 'white'
  ctx.stroke()
  ctx.setLineDash([])
}

function renderScore() {
  ctx.fillStyle = 'white' 
  ctx.font = '20px Arial' 
  ctx.fillText(player1Score, CANVAS_WIDTH / 2 - 40, 30) 
  ctx.fillText(player2Score, CANVAS_WIDTH / 2 + 20, 30) 
}

// Variables to keep track of the score
let player1Score = 0
let player2Score = 0


// x, y position of ball
let ballX = 50 
let ballY = 50 

// x velocity of ball
let vX = +1 // += it moves left to right, 2= speed
// y velocity of ball
let vY = +1

// y position of the first paddle
let paddleY = 10

// y position of the second paddle
let paddleY2 = CANVAS_HEIGHT - 80

// Animate ball & paddles
setInterval(() => {

  renderBackground() 
  renderBall(ballX, ballY) 
  renderPaddle(10, paddleY) 
  renderPaddle(CANVAS_WIDTH - 25, paddleY2) 
  renderDashedLine()
  renderScore()

  ballX += vX  //ballX = ballX PLUS velocity -> It moves!
  ballY += vY  // add ballY += vY to move ball in y-axis


  // Check if ball hits the top or bottom border
  if (ballY + RADIUS >= CANVAS_HEIGHT || ballY - RADIUS <= 0) {
    vY = -vY 
  }

  
  // left side check
  if(ballX - RADIUS <= 0 + 20) {
    // the paddle was touched, bounce at the paddle
    if(ballY >= paddleY - 40 && ballY <= paddleY + 40) {
      console.log("touch left")
      vX = -vX
    } else {
      // the paddle was not touched, bounce at the wall
      if(ballX - RADIUS <= 0 || ballX + RADIUS >= CANVAS_WIDTH) {
        player2Score++
        vX = -vX
      }
    }
    
  }

  // right side check
  if(ballX + RADIUS >= CANVAS_WIDTH - 20) {
    // the paddle was touched, bounce at the paddle
    if(ballY >= paddleY2 - 40 && ballY <= paddleY2 + 40) {
      console.log("touch right")
      vX = -vX
    } else {
      // the paddle was not touched, bounce at the wall
      if(ballX - RADIUS <= 0 || ballX + RADIUS >= CANVAS_WIDTH) {
        player1Score++
        vX = -vX
      }
    }
    
  }

 
    
  


})


/
// Move first paddle
document.addEventListener('keypress', (event) => {
  if (event.key === 'w') {
    paddleY -= 5 
  }
  if (event.key === 's') {
    paddleY += 5
  }
}) 

// Move second paddle
document.addEventListener('keypress', (event) => {
  if (event.key === 'i') {
    paddleY2 -= 5 
  }
  if (event.key === 'k') {
    paddleY2 += 5 
  }
})



/* 
  // Check if ball hits the top or bottom border
  if (ballY + RADIUS >= CANVAS_HEIGHT || ballY - RADIUS <= 0) {
    vY = -vY 
  }

  // Check if ball hits the right or left border
  if (ballX + RADIUS >= CANVAS_WIDTH || ballX - RADIUS <= 0) {
    vX = -vX 
  }
})
/*


/* with code below it only bounces back when hit with paddle - didn't want that anymore
// Check if ball hits the top or bottom edge
if (ballY + RADIUS >= CANVAS_HEIGHT || ballY - RADIUS <= 0) {
vY = -vY 
}

// Check if ball hits the right or left edge
if (ballX + RADIUS >= CANVAS_WIDTH - 15 && ballY >= paddleY2 && ballY <= paddleY2 + 70) {
vX = -vX 
}

if (ballX - RADIUS <= 15 && ballY >= paddleY && ballY <= paddleY + 70) {
vX = -vX 
}
}) 
*/
