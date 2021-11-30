const canvas = document.getElementById("drawing");
const ctx = canvas.getContext("2d");

const volumeOn = document.getElementById("volumeOn");
const volumeOff = document.getElementById("volumeOff");

//[]효과음
//크롬 자동재생 정책
//1. 무음 2. 사용자 인터렉션(클릭, 탭, 터치)
const sound = document.getElementById("sound");

const ballRadius = 10;
const paddleHeight = 10;
const paddleWidth = 200;

//keyboard
let rightMoved = false;
let leftMoved = false;

//brick
const brickRowCount = 6;
const brickColumnCount = 5;
const brickWidth = canvas.width / brickColumnCount;
const brickHeight = 25;
const brickPadding = 5;
const brickOffsetTop = 52;
const brickOffsetLeft = 2.8;

class DrawObject {
  constructor() {
    this.ballX = canvas.width / 2;
    this.ballY = canvas.height - paddleHeight - ballRadius / 2; //2로 나
    this.paddleX = canvas.width / 2 - paddleWidth / 2;
    this.bricks = [];
    this.MakeBricks();
  }
  DrawBall() {
    ctx.beginPath();
    ctx.arc(this.ballX, this.ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = "#d63031";
    ctx.fill();
    ctx.closePath();
  }

  DrawPaddle() {
    ctx.beginPath();
    ctx.rect(
      this.paddleX,
      canvas.height - paddleHeight,
      paddleWidth,
      paddleHeight
    );
    ctx.fillStyle = "#2d3436";
    ctx.fill();
    ctx.closePath();
  }
  MakeBricks() {
    //행
    for (let r = 0; r < brickRowCount; r++) {
      this.bricks[r] = [];
      //열
      for (let c = 0; c < brickColumnCount; c++) {
        this.bricks[r][c] = 1;
      }
    }
  }
  DrawBricks() {
    for (let r = 0; r < brickRowCount; r++) {
      for (let c = 0; c < brickColumnCount; c++) {
        //X축은 열을 기준으로
        let brickX = c * brickWidth + brickOffsetLeft;
        //Y축은 행을 기준으로
        let brickY = r * brickHeight + brickOffsetTop;

        if (this.bricks[r][c]) {
          ctx.beginPath();
          ctx.rect(
            brickX,
            brickY,
            brickWidth - brickPadding,
            brickHeight - brickPadding
          );
          ctx.fillStyle = "#74b9ff";
          ctx.fill();
          ctx.closePath();
        }
      }
    }
  }
  DrawScore(score) {
    ctx.font = "bold 20pt Arial";
    ctx.fillStyle = "black";
    ctx.fillText(`🚀 Score: ${score}`, 330, 35);
  }
}

class DrawCanvas {
  constructor(drawObject) {
    this.drawObject = drawObject;
    this.dx = 4;
    this.dy = -5;
    this.score = 0;
  }

  init() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  BounceBall() {
    this.init();

    //좌우벽
    if (
      this.drawObject.ballX + this.dx < ballRadius ||
      this.drawObject.ballX + this.dx > canvas.width - ballRadius
    ) {
      this.dx = -this.dx;
    }
    //상
    if (this.drawObject.ballY + this.dy < ballRadius) {
      this.dy = -this.dy;
    }
    //하 - 바닥 // 게임종료
    else if (this.drawObject.ballY + this.dy > canvas.height - ballRadius) {
      alert("GAME OVER");
      clearInterval(timer);
      document.location.reload();
    }
    //하 - 패들
    else if (
      this.drawObject.ballY + this.dy >
        canvas.height - paddleHeight - this.dy &&
      this.drawObject.ballY + this.dy < canvas.height - paddleHeight + this.dy
    ) {
      if (
        this.drawObject.ballX > this.drawObject.paddleX &&
        this.drawObject.ballX < this.drawObject.paddleX + paddleWidth
      ) {
        this.dy = -this.dy;
      }
    }

    this.DetectCollision();

    this.drawObject.ballX += this.dx;
    this.drawObject.ballY += this.dy;
  }

  DetectCollision() {
    for (let r = 0; r < brickRowCount; r++) {
      for (let c = 0; c < brickColumnCount; c++) {
        let brickX = c * brickWidth + brickOffsetLeft;
        let brickY = r * brickHeight + brickOffsetTop;

        if (this.drawObject.bricks[r][c]) {
          if (
            this.drawObject.ballX - ballRadius > brickX &&
            this.drawObject.ballX - ballRadius <
              brickX + brickWidth - brickPadding &&
            this.drawObject.ballY - ballRadius > brickY &&
            this.drawObject.ballY - ballRadius <
              brickY + brickHeight - brickPadding
          ) {
            //벽돌에 닿으면 튕긴다
            this.dy = -this.dy;

            this.drawObject.bricks[r][c] = 0;
            this.score++;
          }
        }
      }
    }
  }

  MovePaddle() {
    if (rightMoved) {
      this.drawObject.paddleX += 7;
      if (this.drawObject.paddleX > canvas.width - paddleWidth) {
        this.drawObject.paddleX = canvas.width - paddleWidth;
      }
    } else if (leftMoved) {
      this.drawObject.paddleX -= 7;
      if (this.drawObject.paddleX < 0) {
        this.drawObject.paddleX = 0;
      }
    }
  }

  Draw() {
    this.drawObject.DrawBricks();
    this.drawObject.DrawBall();
    this.drawObject.DrawPaddle();
    this.drawObject.DrawScore(this.score);
  }
}

class ControlPaddle {
  constructor() {}
  init() {
    this.keyDown();
    this.keyUp();
  }

  keyDown() {
    document.addEventListener("keydown", (event) => {
      if (event.key == "ArrowRight") {
        rightMoved = true;
      } else if (event.key == "ArrowLeft") {
        leftMoved = true;
      }
    });
  }
  keyUp() {
    document.addEventListener("keyup", (event) => {
      if (event.key == "ArrowRight") {
        rightMoved = false;
      } else if (event.key == "ArrowLeft") {
        leftMoved = false;
      }
    });
  }
}

const drawObject = new DrawObject();
const controlPaddle = new ControlPaddle();
const drawCanvas = new DrawCanvas(drawObject);

function play() {
  controlPaddle.init();
  drawCanvas.BounceBall();
  drawCanvas.Draw();
  if (rightMoved || leftMoved) {
    drawCanvas.MovePaddle();
  }
}

const timer = setInterval(play, 10);
