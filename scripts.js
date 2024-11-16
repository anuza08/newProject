const music = document.getElementById("backgroundMusic");
const toggleButton = document.getElementById("toggleMusicButton");

toggleButton.addEventListener("click", () => {
  if (music.paused) {
    music.play();
    toggleButton.textContent = "Pause Music";
  } else {
    music.pause();
    toggleButton.textContent = "Play Music";
  }
});
