const { PI } = require("../constants");
const { roundTo } = require("../globalFunctions");

const shapes = {
  square: {
    area: function (a = 0) {
      return roundTo(a * a, 2);
    },
    perimeter: function (a = 0) {
      return roundTo(4 * a, 2);
    },
  },
  rectangle: {
    area: function (a = 0, b = 0) {
      return roundTo(a * b, 2);
    },
    perimeter: function (a = 0, b = 0) {
      return roundTo(2 * (a + b), 2);
    },
  },
  circle: {
    area: function (r = 0) {
      return roundTo(PI * r * r, 2);
    },
    circumference: function (r = 0) {
      return roundTo(2 * PI * r, 2);
    },
  },
  triangle: {
    area: function (b = 0, h = 0) {
      return roundTo((1 / 2) * b * h, 2);
    },
    perimeter: function (a = 0, b = 0, c = 0) {
      return roundTo(a + b + c, 2);
    },
  },
  parallelogram: {
    area: function (b = 0, h = 0) {
      return roundTo(b * h, 2);
    },
    perimeter: function (b = 0, h = 0) {
      return roundTo(2 * (b + h), 2);
    },
  },
  trapezoid: {
    area: function (h = 0, b1 = 0, b2 = 0) {
      return roundTo(((b1 + b2) / 2) * h, 2);
    },
    perimeter: function (a = 0, b = 0, c = 0, d = 0) {
      return roundTo(a + b + c + d, 2);
    },
  },
  ellipse: {
    area: function (r1 = 0, r2 = 0) {
      return roundTo(PI * r1 * r2, 2);
    },
    perimeter: function (r1 = 0, r2 = 0) {
      const perimeter =
        2 *
        PI *
        Number(
          Math.sqrt(
            Math.pow(r1, 2).toFixed(2) + Math.pow(r2, 2).toFixed(2) / 2
          ).toFixed(2)
        );
      return roundTo(perimeter, 2);
    },
  },
  rhombus: {
    area: function (d1 = 0, d2 = 0) {
      return roundTo((d1 * d2) / 2, 2);
    },
    perimeter: function (a = 0) {
      return roundTo(4 * a, 2);
    },
  },
  polygon: {
    area: function (params = { length: 0, side: 0, radius: 0, inradius: 0 }) {
      let area;
      let s = params.hasOwnProperty("length") ? params.length : 0;
      let n = params.hasOwnProperty("side") ? params.side : 0;
      let r = params.hasOwnProperty("radius") ? params.radius : 0;
      let a = params.hasOwnProperty("inradius") ? params.inradius : 0;

      if (s !== 0 && n !== 0) {
        area = (s * s * n) / (4 * Math.tan(180 / n));
      } else if (r !== 0 && n !== 0) {
        area = (r * r * n * Math.sin(360 / n)) / 2;
      } else if (a !== 0 && n !== 0) {
        area = a * a * n * Math.tan(180 / n);
      } else {
        area = 0;
      }
      return Math.abs(roundTo(area, 2));
    },
    perimeter: function (n = 0, l = 0) {
      return roundTo(n * l);
    },
  },
};
