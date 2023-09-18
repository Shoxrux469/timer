let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let stope = document.querySelector(".stop");
let start = document.querySelector(".start");
let retain = document.querySelector(".retain button");
let btn = document.querySelector(".btn");

// console.log(seconds.innerHTML);
let interval = setInterval(() => {
  seconds.innerHTML--;
  if (seconds.innerHTML < 0) {
    seconds.innerHTML = 59;
    minutes.innerHTML--;
} else if(minutes.innerHTML < 0) {
    alert('Time is up')
  }
}, 100);

start.style.display = 'none', 'fade'
stope.onclick = () => {
    clearInterval(interval)
    start.style.display = 'block'
    stope.style.display = 'none'
}
start.onclick = () => {
    setInterval(interval)
    start.style.display = 'none'
    stope.style.display = 'block'
}
retain.onclick = () => {
    setInterval(interval)
}
// console.log()



































