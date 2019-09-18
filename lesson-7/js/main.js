// Создайте базовый класс Figure, который будет хранить координаты(x, y) и цвет фигуры.На базе класса Figure создайте три класса– Line, Rect, Circle, каждый из которых создает соответствующую фигуру.Пример создания экземпляров каждого класса и параметры фигур:

// var line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
// var circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
// var rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color

// Все три класса - наследника имеют метод draw для рисования фигуры с соответствующими параметрами(координаты, размеры, цвет).Фигуры рисуются на Canvas.Для рисования на канвасе создайте еще один класс– Canvas, в котором инициализируется элемент < canvas > из DOM.Класс Canvas– final, он не наследуется.В этом классе есть метод add, который и отображает созданные вами фигуры на странице.Обратите внимание, добавлять фигуры на канвас можно как по отдельности, так и списком.

// var drawArea = new Canvas('canvasID');
// drawArea.add(line);
// drawArea.add(circle, rect);
// <canvas id = "canvasID" > </canvas>

// ET = 3h
// AT = 3h 40m


// -----------------------------------------------------

// Figure для хранения координат, цвета и метода для отрисовки (так как в нем есть код который подходит для всех данных фигур и чтобы его не повторять в каждой из них)
function Figure(x, y, color) {
  this.x = x;
  this.y = y;
  this.color = color;

  this.draw = function (ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
  }
}

// Rect для отрисовки квадрата
function Rect(x, y, w, h, color) {
  Figure.call(this, x, y, color);

  this.w = w;
  this.h = h;

  let newDraw = this.draw;

  this.draw = function (ctx) {
    newDraw.call(this, ctx);
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }
}

// Circle для отрисовки круга
function Circle(x, y, r, color) {
  Figure.call(this, x, y, color);

  this.r = r;

  let newDraw = this.draw;

  this.draw = function (ctx) {
    newDraw.call(this, ctx);
    ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
    ctx.fill();
  }
}

// Line для отрисовки линии 
function Line(x1, y1, x2, y2, color) {
  Figure.call(this, x1, y1, color);

  this.x2 = x2;
  this.y2 =  y2;

  let newDraw = this.draw;

  this.draw = function (ctx) {
    newDraw.call(this, ctx);
    ctx.strokeStyle = this.color;
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x2, this.y2);
    ctx.stroke();
  }
}

// для инициализации < canvas > из DOM.И имеет метод add, который и отображает созданные фигуры на странице
function Canvas(elem) {
  let canvas = document.getElementById(elem);

  this.add = function (...arguments) {
    if (canvas.getContext) {
      let ctx = canvas.getContext('2d');

      for(let i = 0; i < arguments.length; i++){
        arguments[i].draw(ctx);
      }
    } else {
      return alert('Ваш браузер не поддерживает Сanvas');
    }
  }
}

let line = new Line(50, 250, 200, 200, 'red'); // x1, y1, x2, y2, color
let circle = new Circle(120, 120, 50, 'green'); // x, y, r, color
let rect = new Rect(260, 130, 60, 120, 'blue'); // x, y, w, h, color
let drawArea = new Canvas('canvasID');

drawArea.add(line);
drawArea.add(circle, rect);