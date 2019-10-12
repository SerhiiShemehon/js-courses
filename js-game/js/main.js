const btnStart = document.getElementById('btn-start');
const btnStop = document.getElementById('btn-stop');

const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let timer;

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

// расчёта времени
function makeEaseOut(timing) {
  return function (timeFraction) {
    return 1 - timing(1 - timeFraction);
  }
}
function quad(timeFraction) {
  return Math.pow(timeFraction, 2)
}

// фигура квадрат
function Rect(x, shiftY, elemW, elemH, color) {
  this.x = x;
  this.color = color;
  this.y = 0;
  this.w = elemW;
  this.h = elemH;

  this.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.clearRect(this.x, this.y, this.w, this.h);
    this.y = this.y + shiftY;
    ctx.fillRect(this.x, this.y, this.w, this.h);
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

function startGame() {
  btnStart.removeEventListener('click', startGame);
  let interval = 1000;

  function game() {
    let widthRect = randomInteger(10, 30);
    let heightRect = randomInteger(10, 30);
    let positionRectX = selectionPosition(canvas, widthRect);
    let colorRect = selectionColor();

    let duration = 8100;
    let shiftY = 1;

    let rect = new Rect(positionRectX, shiftY, widthRect, heightRect, colorRect);


    animate({
      duration: duration,
      timing: makeEaseOut(quad),
      draw: function (progress) {
        rect.draw(ctx);
      }
    });
  }

  game();

  timer = setInterval(() => {
    game();
  }, interval);
}

btnStart.addEventListener('click', startGame);


btnStop.addEventListener('click', function () {
  btnStop.removeEventListener('click', startGame);
  btnStart.addEventListener('click', startGame);
  clearInterval(timer);
});