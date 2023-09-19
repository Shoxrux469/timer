let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let stope = document.querySelector(".stop");
let start = document.querySelector(".start");
let retain = document.querySelector(".retain button");
let btn = document.querySelector(".btn");

// console.log(seconds.innerHTML);
function why_are_you_gay() {
  var audio = new Audio();
  // audio.src = "./audio/why-online-audio-converter.mp3";
  audio.src = "./audio/yamete_kudasai.mp3"
  audio.autoplay = true;
}
function you_are_gay() {
  var audio = new Audio();
  // audio.src = "./audio/you-are-gay-sound-effect-made-with-Voicemod-technology.mp3";
  audio.src = './audio/yamete-kudasai-sound-ah!-made-with-Voicemod-technology.mp3'
  audio.autoplay = true;
}
(stope.style.display = "none"), "fade";
function func() {
let interval = setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  } else if (seconds.innerHTML < 1) {
    you_are_gay()
    // why_are_you_gay();
    clearInterval(interval);
  }
}, 100);  
}
stope.onclick = () => {
  you_are_gay()
  // clearInterval(interval);
  start.style.display = "block";
  stope.style.display = "none";
};
start.onclick = () => {
  why_are_you_gay();
  func()
  start.style.display = "none";
  stope.style.display = "block";
};