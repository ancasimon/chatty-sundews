import './displayMessage.scss';
// eslint-disable-next-line import/no-cycle
import addBrandNewMessage from '../addMessage/addMessage';
import messageData from '../../helpers/data/messageData';
import userData from '../../helpers/data/userData';
import utilities from '../../helpers/utilities';

const displayAllMessages = () => {
  const allMessages = messageData.getMessages();
  let domString = '';
  allMessages.forEach((message) => {
    const users = userData.getUsers();
    const findUser = users.find((x) => x.id === message.id);
    const loggedUser = addBrandNewMessage.selectedRadio();
    // Anca S: added a div with flex classes to make the messages responsive:
    domString += '<div class="d-flex flex-wrap m-2">';
    domString += `<div id="${message.messageId}" class="messageCard card mb-3">`;
    // Anca S: Added conditional statement to display the Delete button only if the user logged in - aka selected radio button - is the same as the user on the message:
    if (loggedUser === message.id) {
      domString += '<div id="close-button" class="closebtn"><i class="fas fa-trash"></i></div>';
    }
    domString += '<div>';
    domString += `<img src=${findUser.imgUrl} class="img-rounded col-3" alt="user">`;
    domString += '<div class="card-body p-0">';
    domString += `<h3 class="messageName card-text">${findUser.name}</h3>`;
    domString += `<p class="messageText text-center card-text">${message.text}</p>`;
    domString += `<p class="timestamp"><small>${message.timestamp}</small></p>`;
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
    domString += '</div>';
  });
  utilities.printToDom('message-container', domString);
};

const deleteMessageEvent = (e) => {
  const selectedMessage = e.target.closest('.card').id;
  const messages = messageData.getMessages();
  const selectedMessagePosition = messages.findIndex((x) => x.messageId === selectedMessage);
  messages.splice(selectedMessagePosition, 1);
  displayAllMessages();
};

$('body').on('click', '.closebtn', deleteMessageEvent);

export default { displayAllMessages };
