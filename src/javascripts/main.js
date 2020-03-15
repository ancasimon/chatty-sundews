import '../styles/main.scss';
import navL from './components/navbar/navbar';
import 'bootstrap';
import largeText from './components/largeText/largeText';
import clearMessages from './components/clearMessages/clearMessages';
import darkMode from './components/darkMode/darkMode';
import giphyJs from './components/giphy/giphy';
import displayMessage from './components/displayMessage/displayMessage';

const viewChanges = () => {
  largeText.largeTextEvents();
  darkMode.makeDarkEvents();
};

const init = () => {
  navL.loadNavbar();
  displayMessage.displayAllMessages();
  navL.events();
  clearMessages.clearMessageEvent();
  largeText.largeTextEvents();
  darkMode.makeDarkEvents();
  giphyJs.giphyEvents();
  viewChanges();
};

init();
