const palette = document.createElement('div');
palette.id = 'palette';

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

export { brushColor, brushSize };
export default palette;
