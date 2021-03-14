const canvas = document.getElementById('canvas');
let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;
const ctx = canvas.getContext('2d');
const pos = { x: 0, y: 0 };
const colorPalette = [
  'black',
  'white',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
  'pink',
  'brown',
  'grey',
];
const brushSizes = [5, 10, 20];

let brushColor = colorPalette[0];
let brushSize = brushSizes[0];

resize();

canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseenter', setPosition);
window.addEventListener('resize', resize);

function resize() {
  canvasLeft = canvas.offsetLeft;
  canvasTop = canvas.offsetTop;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  ctx.fillStyle = 'white';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

function setPosition(event) {
  pos.x = event.clientX - canvasLeft;
  pos.y = event.clientY - canvasTop;
}

function draw(event) {
  if (event.buttons !== 1) return false;
  ctx.beginPath();
  ctx.lineWidth = brushSize;
  ctx.lineCap = 'round';
  ctx.strokeStyle = brushColor;
  ctx.moveTo(pos.x, pos.y);
  setPosition(event);
  ctx.lineTo(pos.x, pos.y);
  ctx.closePath();
  ctx.stroke();
}

const palette = document.getElementById('palette');
colorPalette.forEach(function (color) {
  const newColorDiv = document.createElement('div');
  newColorDiv.style.backgroundColor = color;
  newColorDiv.className = 'option-container';
  newColorDiv.addEventListener('click', function () {
    brushColor = color;
  });
  palette.appendChild(newColorDiv);
});

const newEraserDiv = document.createElement('div');
newEraserDiv.className = 'option-container';
newEraserDiv.addEventListener('click', function () {
  brushColor = colorPalette[1];
});
const eraser = document.createElement('div');
eraser.className = 'eraser';
newEraserDiv.appendChild(eraser);
palette.appendChild(newEraserDiv);

brushSizes.forEach(function (size) {
  const newBrushDiv = document.createElement('div');
  newBrushDiv.backgroundColor = 'white';
  newBrushDiv.className = 'option-container';
  newBrushDiv.style.background = `radial-gradient(${size}px circle at 50% 50%, black, white)`;
  newBrushDiv.addEventListener('click', function () {
    brushSize = size;
  });
  palette.appendChild(newBrushDiv);
});
