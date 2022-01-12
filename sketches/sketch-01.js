const canvasSketch = require("canvas-sketch");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "black";
    context.strokeStyle = "white";
    context.fillRect(0, 0, width, height);
    context.lineWidth = width * 0.01;

    const w = width * 0.1;
    const h = height * 0.1;
    const gap = width * 0.03;
    const initial_x = width * 0.17;
    const initial_y = height * 0.17;
    let x, y;

    const offset = width * 0.02;

    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        x = initial_x + (w + gap) * i;
        y = initial_y + (h + gap) * j;
        context.beginPath();
        context.rect(x, y, w, h);
        context.stroke();

        if (Math.random() > 0.5) {
          context.beginPath();
          context.rect(x + offset / 2, y + offset / 2, w - offset, h - offset);
          context.stroke();
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
