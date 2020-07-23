const { PI } = require("../constants");
const { roundTo } = require("../globalFunctions");

const solid = {
  cube: {
    surfaceArea: function (a = 0) {
      return roundTo(6 * a * a, 2);
    },
    volume: function (a = 0) {
      return roundTo(Math.pow(a, 3), 2);
    },
    curvedSurfaceArea: function (a = 0) {
      return roundTo(4 * a * a, 2);
    },
  },
  cuboid: {
    surfaceArea: function (l = 0, b = 0, h = 0) {
      return roundTo(2 * (l * b + b * h + l * h), 2);
    },
    curvedSurfaceArea: function (l = 0, b = 0, h = 0) {
      return roundTo(2 * h * (l + b), 2);
    },
    volume: function (l = 0, b = 0, h = 0) {
      return roundTo((l * b * h).toFixed(2), 2);
    },
  },
  sphere: {
    surfaceArea: function (r = 0) {
      return roundTo(4 * PI * r * r, 2);
    },
    volume: function (r = 0) {
      return roundTo((4 / 3) * PI * Math.pow(r, 3), 2);
    },
    curvedSurfaceArea: function (r) {
      return this.surfaceArea(r);
    },
  },
  hemisphere: {
    surfaceArea: function (r = 0) {
      return roundTo(2 * PI * r * r, 2);
    },
    volume: function (r = 0) {
      return roundTo((2 / 3) * PI * Math.pow(r, 3), 2);
    },
    curvedSurfaceArea: function (r) {
      return roundTo(3 * PI * r * r, 2);
    },
  },
  prism: {
    curvedSurfaceArea: function (a = 0, h = 0) {
      return roundTo(a * h * 3);
    },
    surfaceArea: function (a = 0, b = 0, h = 0) {
      return roundTo(this.curvedSurfaceArea(a, b) + 2 * 3 * b, 2);
    },
    volume: function (a = 0, h = 0) {
      return roundTo(Math.round(Math.sqrt(3) / 4) * a * a * h, 2);
    },
  },
  pyramid: {
    curvedSurfaceArea: function (a = 0, sl = 0) {
      return roundTo((1 / 2) * (4 * a) * sl, 2);
    },
    surfaceArea: function (a = 0, sl = 0) {
      return roundTo(this.curvedSurfaceArea(a, sl) + a * a, 2);
    },
    volume: function (a = 0, h = 0) {
      return roundTo((1 / 3) * a * a * h, 2);
    },
  },
  cone: {
    curvedSurfaceArea: function (r = 0, l = 0) {
      return roundTo(PI * r * l, 2);
    },
    surfaceArea: function (r = 0, l = 0) {
      return roundTo(PI * r * (l + r), 2);
    },
    volume: function () {
      return roundTo((1 / 3) * PI * r * r * h, 2);
    },
  },
  cylinder: {
    curvedSurfaceArea: function (r = 0, h = 0) {
      return roundTo(2 * PI * r * h, 2);
    },
    surfaceArea: function (r = 0, h = 0) {
      return roundTo(2 * PI * r * (r + h), 2);
    },
    volume: function (r = 0, h = 0) {
      return roundTo(PI * r * r * h, 2);
    },
  },
};

// console.log(solid.sphere.curvedSurfaceArea(-10));
