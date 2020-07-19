const shapes = {
  square: {
    area: function (a = 0) {
      return a * a;
    },
    perimeter: function (a = 0) {
      return 4 * a;
    },
  },
};

console.log(shapes.square.perimeter(4));
