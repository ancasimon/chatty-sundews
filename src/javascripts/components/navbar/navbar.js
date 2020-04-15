import utilities from '../../helpers/utilities';
import getInfo from '../../helpers/data/userData';
import './navbar.scss';
// eslint-disable-next-line import/no-cycle
import addMessage from '../addMessage/addMessage';
// eslint-disable-next-line import/no-cycle
import displayMessage from '../displayMessage/displayMessage';

const radioButtons = () => {
  const radioUser = getInfo.getUsers();
  let domString = '';
  radioUser.forEach((user) => {
    domString += '<div class="form-check-inline">';
    domString += '  <label>';
    domString += `    <input id="${user.id}" class="form-check-input radio-name" type="radio" name="inlineRadioOptions" value="small">`;
    domString += `    <img class="p-1 form-check-label rounded-circle" src="${user.imgUrl}" width="60px" height="60px">`;
    domString += `    <p class="text-center no-margin">${user.name}</p>`;
    domString += '  </label>';
    domString += '</div>';
  });
  return domString;
};
const loadNavbar = () => {
  let domString = '';
  domString += '<nav class="navbar-custom fixed-top navbar-light bg-light">';
  domString += '  <div class="flex flex-wrap">';
  domString += '    <img src="src/sundews-img/sundew-smoozer.png" class="" alt="Sundew Smoozers">';
  domString += '  </div>';
  domString += '<div class="container align-content-center">';
  domString += `  <div class="user-display mb-0 pb-0 radio-users">${radioButtons()}`;
  domString += '  </div>';
  domString += '<form class="ml-5 mr-5">';
  domString += '<div class="row text-align-center m-0">';
  domString += '    <input id="messageInputField" class="form-control col m-0 text-center" type="text" placeholder="Select user above, add a message, and press ENTER" aria-label="text">';
  domString += '</div>';
  domString += '</form>';
  domString += '<div class="container align-content-center  m-auto pt-2">';
  domString += '    <input type="checkbox" value="large-text" class="m-1" id="largeTextBtn">';
  domString += '    <label class="form-check-label" for="largeTextBtn">Large Text</label>';
  domString += '    <button id="btn-change-theme" class="btn ml-5">CHANGE THEME</button>';
  domString += '    <button id="btn-clear" class="btn ml-5">CLEAR</button>';
  domString += '  </div>';
  domString += '  </div>';
  domString += '</nav>';
  utilities.printToDom('nav-container', domString);
  $('.form-check-input')[0].checked = true;
};

const alertTextValidation = () => {
  $('#validationTextInput').modal('show');
};

const updateLoggedUser = () => {
  addMessage.selectedRadio();
  displayMessage.displayAllMessages();
};

const events = () => {
  $('#messageInputField').keypress((event) => {
    if (event.keyCode === 13) {
      $('#gif-select').removeClass('visible');
      $('#gif-select').addClass('invisible');

      if (document.getElementById('messageInputField').value === '') {
        event.preventDefault();
        alertTextValidation();
      } else {
        addMessage.buildNewMessageObject();
        event.preventDefault();
      }
    }
  });
  // Anca S: Event listener below triggering the updateLoggedUser function when a user radio button is selected. That function (above) gets the new 'logged-in' user & reloads the messages to redisplay the Delete icon only on appropriate messages.
  $('.radio-name').click(updateLoggedUser);
};

export default { loadNavbar, events };
