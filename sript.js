let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let stope = document.querySelector(".stop");
let start = document.querySelector(".start");
let retain = document.querySelector(".retain button");
let btn = document.querySelector(".btn");

// console.log(seconds.innerHTML);
function why_are_you_gay() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "why-online-audio-converter.mp3"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
function you_are_gay() {
  var audio = new Audio(); // Создаём новый элемент Audio
  audio.src = "./you-are-gay-sound-effect-made-with-Voicemod-technology.mp3"; // Указываем путь к звуку "клика"
  audio.autoplay = true; // Автоматически запускаем
}
(start.style.display = "none"), "fade";
// function func() {
let interval = setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
  } else if (minutes.innerHTML < 0) {
    alert("Time is up");
  }
}, 100);
// }
stope.onclick = () => {
  clearInterval(interval);
  start.style.display = "block";
  stope.style.display = "none";
  why_are_you_gay();
};
start.onclick = () => {
  start.style.display = "none";
  stope.style.display = "block";
  you_are_gay()
};