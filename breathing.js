function startstop() {
  const button = document.getElementById("start-stop-btn");
  const circle = document.getElementById("animation-circle");
  const text = document.getElementById("circle-text");
  const durationSelect = document.getElementById("duration-select");
  const countdown = document.getElementById("countdown");

  if (button.textContent.trim().toLowerCase() === "start") {
    button.textContent = "Stop";
    circle.classList.add("animate");

    const duration = parseInt(durationSelect.value); // in seconds
    let timeleft = duration;

    const phases = ["Inhale", "Exhale"];
    let phaseIndex = 0;

    text.textContent = phases[phaseIndex];
    countdown.textContent = formatTime(timeleft);

    // Interval to switch phase text every 4 seconds
    window.breathingInterval = setInterval(() => {
      phaseIndex = (phaseIndex + 1) % phases.length;
      text.textContent = phases[phaseIndex];
    }, 4000);

    // Interval to countdown the time left every 1s
    window.countdownInterval = setInterval(() => {
      timeleft--;
      countdown.textContent = formatTime(timeleft);

      if (timeleft <= 0) {
        clearInterval(window.breathingInterval);
        clearInterval(window.countdownInterval);
        circle.classList.remove("animate");
        text.textContent = "Well done! ✨";
        button.textContent = "Start";
        countdown.textContent = "00:00";
      }
    }, 1000);
  } else {
    button.textContent = "Start";
    circle.classList.remove("animate");
    clearInterval(window.breathingInterval);
    text.textContent = "Breathe";
    countdown.textContent = "00:00";
    clearInterval(window.countdownInterval);
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}
