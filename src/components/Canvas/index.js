import { brushColor, brushSize } from 'components/Palette';
const canvas = document.createElement('canvas');
canvas.id = 'canvas';

const ctx = canvas.getContext('2d');

let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;

let imageData;

const pos = { x: 0, y: 0 };

canvas.addEventListener('mousedown', setPosition);
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseenter', setPosition);
canvas.addEventListener('mouseup', setImageData);

canvas.addEventListener('touchstart', setPosition);
canvas.addEventListener('touchmove', draw);
canvas.addEventListener('touchend', setImageData);
canvas.addEventListener('touchcancel', setImageData);

window.addEventListener('resize', function () {
  resizeCanvas(false);
});

function setImageData() {
  imageData = ctx.getImageData(0, 0, canvas.width || 1, canvas.height || 1);
}

function resizeCanvas(init) {
  canvasLeft = canvas.offsetLeft;
  canvasTop = canvas.offsetTop;
  canvas.width = canvas.offsetWidth;
  canvas.height = canvas.offsetHeight;
  if (init) {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    setImageData();
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

const canvasContainer = document.createElement('div');
canvasContainer.id = 'canvas-container';
canvasContainer.appendChild(canvas);

export default canvasContainer;
export { resizeCanvas };
