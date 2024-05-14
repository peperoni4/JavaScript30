window.addEventListener("keydown", (e) => {
  const audio = document.querySelector(`audio[data-key="${e.code}"]`);
  if (!audio) return;

  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!key.classList.contains("playing")) {
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
  }
});

window.addEventListener("keyup", (e) => {
  const key = document.querySelector(`.key[data-key="${e.code}"]`);
  if (!key) return;
  key.classList.remove("playing");
});
