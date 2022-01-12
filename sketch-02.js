const canvasSketch = require("canvas-sketch");
const math = require("canvas-sketch-util/math");
const random = require("canvas-sketch-util/random");

const settings = {
  dimensions: [1080, 1080],
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = "white";
    context.fillRect(0, 0, width, height);

    context.fillStyle = "black";

    const centerX = width * 0.5;
    const centerY = height * 0.5;
    const w = width * 0.01;
    const h = height * 0.1;
    let x, y;

    const number = 42;
    const radius = width * 0.3;

    for (let i = 0; i < number; i++) {
      const slice = math.degToRad(360 / number);
      const angle = slice * i;

      x = centerX + radius * Math.sin(angle);
      y = centerY + radius * Math.cos(angle);

      // context.save();
      // context.translate(x, y);
      // context.rotate(-angle);
      // context.scale(random.range(0.1, 2), random.range(0.2, 0.5));

      // context.beginPath();
      // context.rect(-w * 0.5, random.range(0, -h * 0.5), w, h);
      // context.fill();
      // context.restore();

      const makeArk = (x, y) => {
        context.save();
        context.translate(x, y);
        context.rotate(-angle);

        context.lineWidth = random.range(5, 20);

        context.beginPath();
        context.arc(
          0,
          0,
          radius * random.range(0.7, 1.3),
          slice * random.range(1, -8),
          slice * random.range(1, 5)
        );
        context.stroke();
        context.restore();
      };

      makeArk(0, 0);
      makeArk(0, 1080);
      makeArk(1080, 0);
      makeArk(1080, 1080);
      makeArk(540, 540);
    }
  };
};

canvasSketch(sketch, settings);
