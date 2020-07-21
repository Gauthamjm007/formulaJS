const solid = {
  cube: {
    surfaceArea: function (a) {
      return 6 * a * a;
    },
    volume: function (a) {
      return Math.pow(a, 3);
    },
  },
  sphere: {
    surfaceArea: function (r) {
      return 4 * Math.PI * r * r;
    },
    volume: function (r) {
      return (4 / 3) * Math.PI * Math.pow(r, 3);
    },
  },
};
