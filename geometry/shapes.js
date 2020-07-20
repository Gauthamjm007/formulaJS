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
    area: function (b = 0, h = 0) {
      return ((1 / 2) * b * h).toFixed(2);
    },
    perimeter: function (a = 0, b = 0, c = 0) {
      return (a + b + c).toFixed(2);
    },
  },
  parallelogram: {
    area: function (b = 0, h = 0) {
      return (b * h).toFixed(2);
    },
    perimeter: function (b = 0, h = 0) {
      return (2 * (b + h)).toFixed(2);
    },
  },
  trapezoid: {
    area: function (h = 0, b1 = 0, b2 = 0) {
      return (((b1 + b2) / 2) * h).toFixed(2);
    },
    perimeter: function (a = 0, b = 0, c = 0, d = 0) {
      return (a + b + c + d).toFixed(2);
    },
  },
  ellipse: {
    area: function (r1 = 0, r2 = 0) {
      return Math.PI.toFixed(2) * r1 * r2;
    },
    perimeter: function (r1 = 0, r2 = 0) {
      return (
        2 *
        Math.PI.toFixed(2) *
        Math.sqrt(
          Math.pow(r1, 2).toFixed(2) + Math.pow(r2, 2).toFixed(2) / 2
        ).toFixed(2)
      ).toFixed(2);
    },
  },
  rhombus: {
    area: function (d1 = 0, d2 = 0) {
      return ((d1 * d2) / 2).toFixed(2);
    },
    perimeter: function (a = 0) {
      return 4 * a;
    },
  },
};

console.log(shapes.ellipse.perimeter(4, 4));
