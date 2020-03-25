const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    context.beginPath();
    context.arc(width / 2, height / 2, 400, 0, Math.PI * 4.5, false);
    context.fillStyle = 'red';
    context.fill();
    context.lineWidth = 20;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
