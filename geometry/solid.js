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
  prism: {
    curvedSurfaceArea: function (a = 0, h = 0) {
      return (a * h * 3).toFixed(2);
    },
    surfaceArea: function (a = 0, b = 0, h = 0) {
      return (this.curvedSurfaceArea(a, b) + 2 * 3 * b).toFixed(2);
    },
    volume: function (a = 0, h = 0) {
      return (Math.round(Math.sqrt(3) / 4) * a * a * h).toFixed(2);
    },
  },
  pyramid: {
    curvedSurfaceArea: function (a = 0, sl = 0) {
      return ((1 / 2) * (4 * a) * sl).toFixed(2);
    },
    surfaceArea: function (a = 0, sl = 0) {
      return (this.curvedSurfaceArea(a, sl) + a * a).toFixed(2);
    },
    volume: function (a = 0, h = 0) {
      return ((1 / 3) * a * a * h).toFixed(2);
    },
  },
  cone: {
    curvedSurfaceArea: function (r = 0, l = 0) {
      return (PI * r * l).toFixed(2);
    },
    surfaceArea: function (r = 0, l = 0) {
      return (PI * r * (l + r)).toFixed(2);
    },
    volume: function () {
      return ((1 / 3) * PI * r * r * h).toFixed(2);
    },
  },
  cylinder: {
    curvedSurfaceArea: function (r = 0, h = 0) {
      return (2 * PI * r * h).toFixed(2);
    },
    surfaceArea: function (r = 0, h = 0) {
      return (2 * PI * r * (r + h)).toFixed(2);
    },
    volume: function (r = 0, h = 0) {
      return (PI * r * r * h).toFixed(2);
    },
  },
};

console.log(solid.sphere.curvedSurfaceArea(-10));
