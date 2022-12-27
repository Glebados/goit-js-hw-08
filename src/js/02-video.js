import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
import '../css/common.css';

const TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);

if (localStorage.getItem(TIME_KEY)) {
  player.setCurrentTime(localStorage.getItem(TIME_KEY));
}

const onPlay = function (data) {
  localStorage.setItem(TIME_KEY, data.seconds);
};

player.on('timeupdate', throttle(onPlay, 1000));

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});
