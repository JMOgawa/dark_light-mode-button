const body = document.querySelector("body");

const mode = document.getElementById("switch-btn"); mode.onclick = function () { mode.classList.toggle("darkmode"); body.classList.toggle("darkmode"); };