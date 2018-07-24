const secondHand = document.querySelector(".second-hand");
const minuteHand = document.querySelector(".min-hand");
const hourHand = document.querySelector(".hour-hand");
const timeIs = document.querySelector(".timeIs");
function setDate() {
  const now = new Date();

  const hours = now.getHours();

  const hoursDegrees = hours / 12 * 360 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  const minutes = now.getMinutes();

  const minutesDegrees = minutes / 60 * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const seconds = now.getSeconds();

  const secondsDegrees = seconds / 60 * 360 + 90;
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const d = new Date(); // for now
  const h = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  const m = d.getMinutes(); // for now
  const s = d.getSeconds(); // for now

  timeIs.innerHTML = "the time is" + " " + h + ":" + m + ":" + s;
}

setInterval(setDate, 1000);