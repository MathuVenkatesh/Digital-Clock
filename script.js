function showTime() {
  let date = new Date();
  console.log(date);
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  let session = "am";
  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "pm";
  }
  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;
  document.getElementById("digi-clock").innerHTML = `${h}:${m}:${s} ${session}`;
  setTimeout(showTime, 1000);
}

showTime();
