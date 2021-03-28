import './styles.scss';

const lobbyContainer = document.createElement('div');
lobbyContainer.id = 'lobby-container';

const nameField = document.createElement('input');
nameField.type = 'text';
nameField.id = 'name-field';
nameField.placeholder = 'Enter your name';

lobbyContainer.appendChild(nameField);
export default lobbyContainer;
