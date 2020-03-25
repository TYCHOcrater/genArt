const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [2048,2048],
  // orientation: 'landscape',
  // units: 'cm',
  // pixelsPerInch: 300
};

const sketch = () => {
  return ({ context, width, height }) => {
    console.log(width, height);
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    //beginPath() -> creating a circle primitives
    context.beginPath();
    context.arc(width / 2, height / 2, 2, 0, Math.PI * 4.5, false);
    context.fillStyle = 'red';
    context.fill();

    //strokes outlines for primitives after beginPath()
    context.lineWidth = width * 0.02;
    context.strokeStyle = 'blue';
    context.stroke();
  };
};

canvasSketch(sketch, settings);
