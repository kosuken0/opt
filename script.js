window.addEventListener("load", () => {
  const canvas = document.getElementById("main");
  const ctx = canvas.getContext("2d");

  // Resize canvas to fill the whole screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    drawUI();
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);
});
