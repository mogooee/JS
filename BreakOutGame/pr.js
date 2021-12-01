const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");

//패들
let paddleHeight = 12;
let paddleWidth = 120;
//let paddleX = canvas.width - paddleWidth;
let paddleX = canvas.width / 2 - paddleWidth / 2;

//drawBall
const ballRadius = 10;
let x = canvas.width / 2;
//맨 상단의 위치는 0, 바닥의 위치는 canvas.height
//let y = canvas.height - ballRadius;
//정확한 값은 r/2.. 왜 그렇지?!
let y = canvas.height - paddleHeight - ballRadius / 2;
let collision = 0;

//draw
let dx = 4;
let dy = -4;

//keyboard
let rightMoved = false;
let leftMoved = false;

//brick
const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

var bricks = [];
for (var c = 0; c < brickColumnCount; c++) {
  bricks[c] = [];
  for (var r = 0; r < brickRowCount; r++) {
    bricks[c][r] = { x: 0, y: 0 };
  }
}
function drawBall() {
  ctx.beginPath();
  //x,y, 반지름,시작,끝 각도, 시계방향
  ctx.arc(x, y, ballRadius, 0, Math.PI * 2);
  ctx.fillStyle = "#ff7675";
  //   "rgba(" +
  //   Math.random() * 255 +
  //   "," +
  //   Math.random() * 255 +
  //   "," +
  //   Math.random() * 255 +
  //   ")";
  ctx.fill();
  ctx.closePath();
}

function drawPaddle() {
  ctx.beginPath();
  ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
  ctx.fillStyle = "#2d3436";
  ctx.fill();
  ctx.closePath();
}
function drawBricks() {
  for (var c = 0; c < brickColumnCount; c++) {
    for (var r = 0; r < brickRowCount; r++) {
      bricks[c][r].x = 0;
      bricks[c][r].y = 0;
      ctx.beginPath();
      ctx.rect(0, 0, brickWidth, brickHeight);
      ctx.fillStyle = "#74b9ff";
      ctx.fill();
      ctx.closePath();
    }
  }
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  //좌우 10(8,472)470 // x=w/2(240) //  dx(4,-4)
  if (x + dx < ballRadius || x + dx > canvas.width - ballRadius) {
    dx = -dx;
  }
  // (6, 714) // y=h-r (0+10, 720-10) // dy(-4,4)
  if (y + dy < ballRadius) {
    dy = -dy;
  }
  //하 1. 바닥에 닿을 때
  else if (y + dy > canvas.height - ballRadius) {
    alert("GAME OVER");
    document.location.reload();
    clearInterval(timer);
  }
  // 2.패들에 닿을 때
  else if (
    y + dy > canvas.height - paddleHeight - dy &&
    y + dy < canvas.height - paddleHeight + dy
  ) {
    if (x > paddleX && x < paddleX + paddleWidth) {
      //720-50 = 670
      dy = -dy;
    }
  }

  x += dx;
  y += dy;

  if (rightMoved) {
    paddleX += 7;
    if (paddleX > canvas.width - paddleWidth) {
      paddleX = canvas.width - paddleWidth;
    }
  } else if (leftMoved) {
    paddleX -= 7;
    if (paddleX < 0) {
      paddleX = 0;
    }
  }

  drawPaddle();
  drawBall();

  drawBricks();
}

const timer = setInterval(draw, 10);

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
//canvas.addEventListener("mousemove", mouseMove);

function keyDown(event) {
  if (event.key == "ArrowRight") {
    rightMoved = true;
  } else if (event.key == "ArrowLeft") {
    leftMoved = true;
  }
}

function keyUp(event) {
  if (event.key == "ArrowRight") {
    rightMoved = false;
  } else if (event.key == "ArrowLeft") {
    leftMoved = false;
  }
}

// function mouseMove(event) {
//   paddleX = event.offsetX;
// }
