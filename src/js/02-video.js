import Player from '@vimeo/player';
const throttle = require('lodash.throttle');
const video = document.querySelector("#vimeo-player");
const playerVideo = new Player(video);

playerVideo.on('timeupdate', throttle(((data)=> { localStorage.setItem("videoplayer-current-time", JSON.stringify(data.seconds))}),1000));
playerVideo.setCurrentTime(localStorage.getItem("videoplayer-current-time"))