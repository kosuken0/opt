// Base64 encoded image string (replace this with your actual base64 encoded image)
const base64Image = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA';

// Get the canvas element from the DOM
const canvas = document.getElementById('main');
const ctx = canvas.getContext('2d');

// Create an Image object
const img = new Image();

// Set the src attribute to the base64 encoded image
img.src = base64Image;

// When the image is loaded, execute this code
img.onload = function() {
  // Calculate the scale factor to fit the image within the canvas
  const scale = Math.min(canvas.width / img.width, canvas.height / img.height);

  // Calculate the new dimensions for the scaled image
  const scaledWidth = img.width * scale;
  const scaledHeight = img.height * scale;

  // Calculate the position to center the image on the canvas
  const x = (canvas.width - scaledWidth) / 2;
  const y = (canvas.height - scaledHeight) / 2;

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the scaled image onto the canvas
  ctx.drawImage(img, x, y, scaledWidth, scaledHeight);

  // Calculate average color of the image pixels
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

  // Draw an outline around the image with the average color
  ctx.lineWidth = 10;
  ctx.strokeStyle = avgColor;
  ctx.strokeRect(x, y, scaledWidth, scaledHeight);
};
