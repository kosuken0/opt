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

    // Draw container with text
    drawContainerWithText(
      ctx,
      canvas.width / 2 - 150, // x position
      canvas.height / 2 - 50, // y position
      300,                    // width
      100,                    // height
      "#2bffa3",              // container color
      "Dps optimiser"         // text
    );
  }

  // Function to draw text
  function drawText(ctx, text, x, y, font, color, align = "center", outline = false) {
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

  // Function to darken a hex color
  function darkenColor(color, percent) {
    const num = parseInt(color.slice(1), 16);
    const amt = Math.round(2.55 * percent);
    const R = (num >> 16) - amt;
    const G = ((num >> 8) & 0x00FF) - amt;
    const B = (num & 0x0000FF) - amt;
    return `#${(
      0x1000000 +
      (R < 255 ? (R < 1 ? 0 : R) : 255) * 0x10000 +
      (G < 255 ? (G < 1 ? 0 : G) : 255) * 0x100 +
      (B < 255 ? (B < 1 ? 0 : B) : 255)
    )
      .toString(16)
      .slice(1)}`;
  }

  // Function to draw a container with text
  function drawContainerWithText(ctx, x, y, width, height, bgColor, text) {
    const outlineColor = darkenColor(bgColor, 40);

    // Draw container
    ctx.fillStyle = bgColor;
    ctx.fillRect(x, y, width, height);

    // Draw container outline
    ctx.strokeStyle = outlineColor;
    ctx.lineWidth = 5;
    ctx.strokeRect(x, y, width, height);

    // Draw text
    drawText(
      ctx,
      text,
      x + width / 2,
      y + height / 2 + 10, // Adjusted for centering text vertically
      "30px 'Ubuntu'",
      "#ffffff",
      "center",
      true
    );
  }

  // Ensure the font is loaded before drawing
  document.fonts.load("10px 'Ubuntu'").then(drawUI);
});
