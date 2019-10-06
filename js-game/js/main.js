let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

// фигура квадрат
function Rect(x, elemW, elemH, color) {
  this.x = x;
  this.color = color;
  this.y = 0;
  this.w = elemW;
  this.h = elemH;

  this.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
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
function selectionPosition(canvas, elemW) {
  let widthX = canvas.clientWidth;
  let widthXMin = 0;
  let widthXMax = widthX - elemW;

  return randomInteger(widthXMin, widthXMax);
}




function animate() {

  requestAnimationFrame(animate);
}

// тут может находится ваш код

document.body.onload = animate;