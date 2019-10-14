const body = document.querySelector('body');
const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');
const score = document.getElementById('score');
const left = document.getElementById('left');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let timer;
let scoreNumber = 0;
let leftNumber = 20;
let clickCoordinatesX = 0;
let clickCoordinatesY = 0;
let min = 20;
let max = 20;
let gameOverBoolean = true;
let duration = 8200;
let shiftY = 1;

// использования requestAnimationFrame
function animate(options) {

  let start = performance.now();

  requestAnimationFrame(function animate(time) {
    // timeFraction от 0 до 1
    let timeFraction = (time - start) / options.duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    let progress = options.timing(timeFraction)

    options.draw(progress);

    if (timeFraction < 1) {
      requestAnimationFrame(animate);
    }

  });
}

// фигура квадрат
function Rect(x, shiftY, elemW, elemH, color) {
  this.x = x;
  this.color = color;
  this.y = 0;
  this.w = elemW;
  this.h = elemH;
  let checkDraw = true;

  this.draw = function (ctx, miss) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.clearRect(this.x, this.y, this.w, this.h);
    if (gameOverBoolean) {
      if (!this.checkClick() && checkDraw){
        this.y = this.y + shiftY;
        ctx.fillRect(this.x, this.y, this.w, this.h);
      } else {
        if (checkDraw) {
          counter();
          clearTimeout(miss);
        }
        checkDraw = false;
      }
    } else {
      ctx.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);
    }
  }

  this.checkClick = function () {
    let checkClick = false;

    if ((clickCoordinatesX >= this.x && clickCoordinatesX <= this.x + this.w) && (clickCoordinatesY >= this.y && clickCoordinatesY <= this.y + this.h) ) {
      checkClick = true;
    }
    return checkClick;
  }
}

// случайное число
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);

  return Math.floor(rand);
}

// выбор цвета
function selectionColor() {
  let red = randomInteger(0, 250);
  let green = randomInteger(0, 250);
  let blue = randomInteger(0, 250);

  return `rgb(${red}, ${green}, ${blue})`;
}

// выбор позиции 
function selectionPosition(canvas, widthRect) {
  let elemW = widthRect;
  let widthX = canvas.clientWidth;
  let widthXMin = 0;
  let widthXMax = widthX - elemW;

  return randomInteger(widthXMin, widthXMax);
}

// координаты клика 
function clickCoordinates(event) {
  clickCoordinatesX = event.offsetX;
  clickCoordinatesY = event.offsetY;
  setTimeout(() => {
    clickCoordinatesX = 0;
    clickCoordinatesY = 0;
  }, 30);
}

// отрисовка игры
function game() {
  let widthRect = randomInteger(min, max);
  let heightRect = randomInteger(min, max);
  let positionRectX = selectionPosition(canvas, widthRect);
  let colorRect = selectionColor();

  if( randomInteger(1, 3) === 1 ){
    duration = 2750;
    shiftY = 3; 
  } else if (randomInteger(1, 3) === 2) {
    duration = 4100;
    shiftY = 2;
  } else {
    duration = 8200;
    shiftY = 1;
  }

  
  let miss = setTimeout(() => {
    gameOver()
  }, duration);

  let rect = new Rect(positionRectX, shiftY, widthRect, heightRect, colorRect);


  animate({
    duration: duration,
    timing: function (timeFraction) {
      return timeFraction;
    },
    draw: function (progress) {
      rect.draw(ctx, miss);
    }
  });
}

// игра
function startGame() {
  btnStart.removeEventListener('click', startGame);
  canvas.addEventListener('click', clickCoordinates);
  gameOverBoolean = true;
  scoreNumber = 0;
  leftNumber = 20;
  left.innerText = leftNumber;
  score.innerText = scoreNumber;

  game();
  timer = setInterval(() => {
    game();
  }, 1000);
}


// игра закончена
function gameOver() {
  if (leftNumber > 0){
    left.innerText = leftNumber - 1;
  } else if (leftNumber === 0 ){
    btnStart.addEventListener('click', startGame);
    clearInterval(timer);
    gameOverBoolean = false;

    let holder = document.createElement('div');
    holder.classList.add('game-over');
    let holderHtml = `<h1>Game over</h1><h2>You hit ${scoreNumber} times</h2>`;
    holder.innerHTML = holderHtml;
    body.appendChild(holder);
  }
  leftNumber--;
}

// счетчик
function counter() {
  scoreNumber++;
  score.innerText = scoreNumber;
  if (scoreNumber > 50) {
    min = 10;
    max = 10;
  }else if (scoreNumber > 30){
    min = 15;
    max = 15;
  } else if (scoreNumber > 20) {
    min = 10;
    max = 30;
  } else if (scoreNumber > 10) {
    min = 15;
    max = 30;
  }
}


btnStart.addEventListener('click', startGame);

btnStop.addEventListener('click', function () {
  clearInterval(timer);
  btnStart.addEventListener('click', startGame);
});