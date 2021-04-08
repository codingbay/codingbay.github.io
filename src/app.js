import './styles.scss';

const main = document.createElement('div');
main.id = 'main';
document.body.appendChild(main);

const grid = document.createElement('div');
grid.id = 'grid';
main.appendChild(grid);

const numOfTiles = 64;
let isStartAdded = false;
let isEndAdded = false;

function handleTileClick(event) {
  const { target } = event;
  const clicked = target.getAttribute('clicked');

  if (clicked === 'false') {
    if (!isStartAdded) {
      isStartAdded = true;
      target.classList.add('startTile');
      target.setAttribute('clicked', true);
    } else if (!isEndAdded) {
      isEndAdded = true;
      target.classList.add('endTile');
      target.setAttribute('clicked', true);
    }
  }
}

function handleTileMouseMove(event) {
  const { target, buttons } = event;
  const clicked = target.getAttribute('clicked');
  if (isStartAdded && isEndAdded && buttons === 1 && clicked === 'false') {
    target.classList.add('wallTile');
    target.setAttribute('clicked', true);
  }
}

for (let x = 0; x < numOfTiles; x++) {
  const tile = document.createElement('div');
  tile.className = 'tile';
  tile.addEventListener('click', handleTileClick);
  tile.addEventListener('mousemove', handleTileMouseMove);
  tile.setAttribute('clicked', false);
  grid.appendChild(tile);
}
