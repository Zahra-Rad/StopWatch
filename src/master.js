const playPause_btn = document.getElementById("play-pause");
const reset_btn = document.getElementById("reset");
const lap_btn = document.getElementById("lap");
const lap_list = document.getElementById("lapList");
const parameters = document.querySelectorAll(".time h3");
let play = true;
let reset = true;
let lapCount = 0;
let ms = 0;
let s = 0;
let m = 0;
let h = 0;
let _interval = "";

playPause_btn.addEventListener("click", () => {
  if (play) {
    _interval = setInterval(stopwatch, 10);
    playPause_btn.children[0].classList.add("hidden");
    playPause_btn.children[1].classList.remove("hidden");
  } else {
    clearInterval(_interval);
    playPause_btn.children[1].classList.add("hidden");
    playPause_btn.children[0].classList.remove("hidden");
  }
  play = !play;
});

reset_btn.addEventListener("click", () => {
  clearInterval(_interval);
  parameters.forEach((parameter) => {
    parameter.innerHTML = "0" + 0;
  });
  ms = 0;
  s = 0;
  m = 0;
  h = 0;
  if (!play) {
    _interval = setInterval(stopwatch, 10);
  }
});

lap_btn.addEventListener("click", () => {
  lapCount++;
  const _li = document.createElement("li");
  _li.innerHTML = `<span> # <span>${
    lapCount < 10 ? (lapCount = "0" + lapCount) : lapCount
  }</span> - <span>Lap</span> </span><span><div><h3 id="hour">${h}</h3>:<h3 id="minute">${m}</h3>:<h3 id="second">${s}</h3></div>:<h3 id="miliSecond">${ms}</h3></span>`;
  lap_list.appendChild(_li);
});

function stopwatch() {
  ms++;
  if (ms < 100) {
    if (ms < 10) {
      ms = "0" + ms;
    }
    parameters[3].innerHTML = ms;
  } else {
    ms = 0;
    parameters[3].innerHTML = "0" + ms;
    s++;
    if (s < 60) {
      if (s < 10) {
        s = "0" + s;
      }
      parameters[2].innerHTML = s;
    } else {
      s = 0;
      parameters[2].innerHTML = "0" + s;
      m++;
      if (m < 60) {
        if (m < 10) {
          m = "0" + m;
        }
        parameters[1].innerHTML = m;
      } else {
        m = 0;
        parameters[1].innerHTML = "0" + m;
        h++;
        if (h < 10) {
          h = "0" + h;
        }
        parameters[0].innerHTML = h;
      }
    }
  }
}
