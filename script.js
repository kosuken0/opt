// Get the canvas element from the DOM
const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');

// Create an Image object
const img = new Image();

// Set the src attribute to the image file
img.src = 'flandre.jpeg';

// When the image is loaded, execute this code
img.onload = function() {
  // Ensure the canvas size matches the window size
  resizeCanvas();

  // Redraw when the window is resized
  window.addEventListener('resize', resizeCanvas);

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Calculate dimensions with border
    const borderWidth = 20;
    const canvasWidthMinusBorder = canvas.width - borderWidth * 2;
    const canvasHeightMinusBorder = canvas.height - borderWidth * 2;

    // Calculate scale to fit the image within the canvas (keeping aspect ratio)
    const scaleX = canvasWidthMinusBorder / img.width;
    const scaleY = canvasHeightMinusBorder / img.height;
    const scale = Math.min(scaleX, scaleY);

    // Calculate scaled dimensions
    const scaledWidth = img.width * scale;
    const scaledHeight = img.height * scale;

    // Calculate position to center the scaled image on the canvas
    const x = (canvas.width - scaledWidth) / 2;
    const y = (canvas.height - scaledHeight) / 2;

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the scaled image onto the canvas
    ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

    // Calculate average color of the image pixels within the scaled area
    const imageData = ctx.getImageData(x, y, scaledWidth, scaledHeight);
    const pixels = imageData.data;
    let totalRed = 0, totalGreen = 0, totalBlue = 0;

    for (let i = 0; i < pixels.length; i += 4) {
      totalRed += pixels[i];
      totalGreen += pixels[i + 1];
      totalBlue += pixels[i + 2];
    }

    const pixelCount = pixels.length / 4;
    const avgRed = Math.round(totalRed / pixelCount);
    const avgGreen = Math.round(totalGreen / pixelCount);
    const avgBlue = Math.round(totalBlue / pixelCount);

    // Convert average RGB values to CSS color format
    const avgColor = `rgb(${avgRed}, ${avgGreen}, ${avgBlue})`;

    // Draw an outline with rounded corners using paths
    const cornerRadius = 10; // Adjust as needed
    ctx.beginPath();
    ctx.moveTo(x + cornerRadius, y);
    ctx.lineTo(x + scaledWidth - cornerRadius, y);
    ctx.arcTo(x + scaledWidth, y, x + scaledWidth, y + cornerRadius, cornerRadius);
    ctx.lineTo(x + scaledWidth, y + scaledHeight - cornerRadius);
    ctx.arcTo(x + scaledWidth, y + scaledHeight, x + scaledWidth - cornerRadius, y + scaledHeight, cornerRadius);
    ctx.lineTo(x + cornerRadius, y + scaledHeight);
    ctx.arcTo(x, y + scaledHeight, x, y + scaledHeight - cornerRadius, cornerRadius);
    ctx.lineTo(x, y + cornerRadius);
    ctx.arcTo(x, y, x + cornerRadius, y, cornerRadius);
    ctx.closePath();

    ctx.lineWidth = borderWidth;
    ctx.strokeStyle = avgColor;
    ctx.stroke();
  }
};
