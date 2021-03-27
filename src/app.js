const main = document.createElement('div');
main.id = 'main';

const canvas = document.createElement('canvas');
canvas.id = 'canvas';

const canvasContainer = document.createElement('div');
canvasContainer.id = 'canvas-container';
canvasContainer.appendChild(canvas);

const leftSide = document.createElement('div');
leftSide.id = 'left-side';

const palette = document.createElement('div');
palette.id = 'palette';

const chat = document.createElement('chat');
chat.id = 'chat';

leftSide.appendChild(palette);
leftSide.appendChild(chat);

main.appendChild(leftSide);
main.appendChild(canvasContainer);

document.body.appendChild(main);
