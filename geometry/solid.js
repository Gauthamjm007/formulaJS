const { PI } = require("../constants");

const solid = {
  cube: {
    surfaceArea: function (a = 0) {
      return (6 * a * a).toFixed(2);
    },
    volume: function (a = 0) {
      return Math.pow(a, 3).toFixed(2);
    },
    curvedSurfaceArea: function (a = 0) {
      return 4 * a * a;
    },
  },
  cuboid: {
    surfaceArea: function (l = 0, b = 0, h = 0) {
      return (2 * (l * b + b * h + l * h)).toFixed(2);
    },
    curvedSurfaceArea: function (l = 0, b = 0, h = 0) {
      return (2 * h * (l + b)).toFixed(2);
    },
    volume: function (l = 0, b = 0, h = 0) {
      return (l * b * h).toFixed(2);
    },
  },
  sphere: {
    surfaceArea: function (r = 0) {
      return (4 * PI * r * r).toFixed(2);
    },
    volume: function (r = 0) {
      return ((4 / 3) * PI * Math.pow(r, 3)).toFixed(2);
    },
    curvedSurfaceArea: function (r) {
      return this.surfaceArea(r);
    },
  },
  hemisphere: {
    surfaceArea: function (r = 0) {
      return (2 * PI * r * r).toFixed(2);
    },
    volume: function (r = 0) {
      return ((2 / 3) * PI * Math.pow(r, 3)).toFixed(2);
    },
    curvedSurfaceArea: function (r) {
      return (3 * PI * r * r).toFixed(2);
    },
  },
};

console.log(solid.sphere.curvedSurfaceArea(-10));
