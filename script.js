function draw() {
    const canvas = document.getElementById("test");
    if (canvas.getContext) {
      const ctx = canvas.getContext("2d");
    }
  }
  window.addEventListener("load", draw);
  