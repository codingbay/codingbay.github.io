const canvas = document.getElementById('canvas');
let canvasLeft = canvas.offsetLeft;
let canvasTop = canvas.offsetTop;
const ctx = canvas.getContext('2d');
const pos = { x: 0, y: 0 };

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
  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = 'red';
  ctx.moveTo(pos.x, pos.y);
  setPosition(event);
  ctx.lineTo(pos.x, pos.y);
  ctx.closePath();
  ctx.stroke();
}
