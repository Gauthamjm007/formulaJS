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
};

console.log(shapes.circle.circumference(4));
