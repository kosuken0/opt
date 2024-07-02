window.addEventListener("load", () => {
  const canvas = document.getElementById("test");
  const ctx = canvas.getContext("2d");

  // Resize canvas to fill the whole screen
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  resizeCanvas();
  window.addEventListener('resize', resizeCanvas);

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
    const text = prompt("Enter text:");
    ctx.font = "20px Arial";
    ctx.fillStyle = "red";
    ctx.fillText(text, 200, 400);
  }

  // Create buttons dynamically
  function createButton(text, onClick) {
    const button = document.createElement("button");
    button.innerText = text;
    button.style.position = "absolute";
    button.style.zIndex = 10; // Ensure the button is above the canvas
    document.body.appendChild(button);
    button.addEventListener("click", onClick);
    return button;
  }

  // Position buttons
  const drawRectButton = createButton("Draw Rectangle", drawRectangle);
  drawRectButton.style.top = "10px";
  drawRectButton.style.left = "10px";

  const drawCircleButton = createButton("Draw Circle", drawCircle);
  drawCircleButton.style.top = "10px";
  drawCircleButton.style.left = "150px";

  const clearCanvasButton = createButton("Clear Canvas", clearCanvas);
  clearCanvasButton.style.top = "10px";
  clearCanvasButton.style.left = "290px";

  const drawTextButton = createButton("Draw Text", drawText);
  drawTextButton.style.top = "10px";
  drawTextButton.style.left = "430px";
});
