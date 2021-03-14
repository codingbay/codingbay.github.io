const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;

let imageData;

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

resize(true);

canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('touchstart', setPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mouseup', setImageData);
canvas.addEventListener('touchend', setImageData);
canvas.addEventListener('touchcancel', setImageData);

window.addEventListener('resize', function () {
  resize(false);
});

function setImageData() {
  imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
}

function resize(init) {
  canvasLeft = canvas.offsetLeft;
  canvasTop = canvas.offsetTop;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  if (init) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  }
  ctx.putImageData(imageData, 0, 0);
}

function setPosition(event) {
  let { clientX } = event;
  let { clientY } = event;
  if (event.touches) {
    const [touch] = event.touches;
    clientX = touch.clientX;
    clientY = touch.clientY;
  }

  pos.x = clientX - canvasLeft;
  pos.y = clientY - canvasTop;
}

function draw(event) {
  if (event.buttons !== 1 && !event.touches) return;

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
