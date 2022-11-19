const clock = document.querySelector('.clock');
const today = document.querySelector('.today');


function time(){
  const times = new Date();
  clock.innerHTML = times.toLocaleTimeString();
}
time();
setInterval(time, 1000);


function day(){
  const day = new Date();
  today.innerHTML = day.toLocaleDateString();
}
day();