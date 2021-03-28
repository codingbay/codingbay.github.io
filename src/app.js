import Canvas, { resizeCanvas } from 'components/Canvas';
import Palette from 'components/Palette';
import Chat from 'components/Chat';

import './styles.scss';

const main = document.createElement('div');
main.id = 'main';

const leftSide = document.createElement('div');
leftSide.id = 'left-side';

leftSide.appendChild(Palette);
leftSide.appendChild(Chat);

main.appendChild(leftSide);
main.appendChild(Canvas);

document.body.appendChild(main);

resizeCanvas(true);
