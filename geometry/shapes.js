const shapes = {
  square: {
    area: function (a = 0) {
      return a * a;
    },
    perimeter: function (a = 0) {
      return 4 * a;
    },
  },
  rectangle: {
    area: function (a = 0, b = 0) {
      return (a * b).toFixed(2);
    },
    perimeter: function (a = 0, b = 0) {
      return (2 * (a + b)).toFixed(2);
    },
  },
  circle: {
    area: function (r = 0) {
      return (Math.PI.toFixed(2) * r * r).toFixed(2);
    },
    circumference: function (r = 0) {
      return (2 * Math.PI * r).toFixed(2);
    },
  },
  triangle: {
    area: function (b, h) {
      return ((1 / 2) * b * h).toFixed(2);
    },
    perimeter: function (a, b, c) {
      return (a + b + c).toFixed(2);
    },
  },
  parallelogram: {
    area: function (b, h) {
      return (b * h).toFixed(2);
    },
    perimeter: function (b, h) {
      return (2 * (b + h)).toFixed(2);
    },
  },
  trapezoid: {
    area: function (h, b1, b2) {
      return (((b1 + b2) / 2) * h).toFixed(2);
    },
    perimeter: function (a, b, c, d) {
      return (a + b + c + d).toFixed(2);
    },
  },
};

console.log(shapes.circle.circumference(4));
