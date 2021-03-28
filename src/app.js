// import canvas, { resizeCanvas } from 'components/Canvas';
// import palette from 'components/Palette';
// import chat from 'components/Chat';
import lobbyContainer from 'pages/Lobby';
import './styles.scss';

const main = document.createElement('div');
main.id = 'main';

main.appendChild(lobbyContainer);
// const leftSide = document.createElement('div');
// leftSide.id = 'left-side';

// leftSide.appendChild(palette);
// leftSide.appendChild(chat);

// main.appendChild(leftSide);
// main.appendChild(canvas);

document.body.appendChild(main);

// resizeCanvas(true);
