window.addEventListener("load", () => {
  const canvas = document.getElementById("test");
  const ctx = canvas.getContext("2d");

  function drawRectangle() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(50, 50, 150, 100);
  }

  function drawCircle() {
    ctx.beginPath();
    ctx.arc(250, 250, 50, 0, Math.PI * 2, true);
    ctx.fillStyle = 'green';
    ctx.fill();
    ctx.closePath();
  }

  function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  function drawText() {
    const text = document.getElementById("textInput").value;
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 200, 400);
  }

  document.getElementById("drawRect").addEventListener("click", drawRectangle);
  document.getElementById("drawCircle").addEventListener("click", drawCircle);
  document.getElementById("clearCanvas").addEventListener("click", clearCanvas);
  document.getElementById("drawText").addEventListener("click", drawText);
});
