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

  // Function to draw the UI elements
  function drawUI() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw title text
    drawText("florr.io", canvas.width / 2, 100, "50px 'Ubuntu'", "#fff", "center", true);

    // Draw name input box
    drawBox(ctx, canvas.width / 2 - 100, 200, 200, 50, "#fff", "#000", "Kosuken");

    // Draw buttons
    drawButton(ctx, canvas.width / 2 - 60, 300, 120, 50, "Ready", "#4CAF50", "#fff");
    drawButton(ctx, canvas.width / 2 - 200, 400, 100, 50, "Garden", "#f0e68c", "#000");
    drawButton(ctx, canvas.width / 2 - 50, 400, 100, 50, "Desert", "#f4a460", "#000");
    drawButton(ctx, canvas.width / 2 + 100, 400, 100, 50, "Ocean", "#87ceeb", "#000");
    drawButton(ctx, canvas.width / 2 - 200, 500, 100, 50, "Jungle", "#98fb98", "#000");
    drawButton(ctx, canvas.width / 2 - 50, 500, 100, 50, "Hel", "#dc143c", "#fff");
  }

  // Function to draw text
  function drawText(text, x, y, font, color, align = "center", outline = false) {
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.fillText(text, x, y);
    if (outline) {
      ctx.strokeStyle = 'black';
      ctx.lineWidth = 2;
      ctx.strokeText(text, x, y);
    }
  }

  // Function to draw a box (input box for name)
  function drawBox(ctx, x, y, width, height, bgColor, textColor, text) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    drawText(text, x + width / 2, y + height / 2 + 10, "20px 'Ubuntu'", textColor, "center");
  }

  // Function to draw a button
  function drawButton(ctx, x, y, width, height, text, bgColor, textColor) {
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, width, height);
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.strokeRect(x, y, width, height);
    drawText(text, x + width / 2, y + height / 2 + 10, "20px 'Ubuntu'", textColor, "center");
  }

  // Ensure the font is loaded before drawing
  document.fonts.load("10px 'Ubuntu'").then(drawUI);
});
