const roundTo = (num, digits) => {
  let isNegative = false,
    Multiplicant = 0;
  if (num < 0) {
    isNegative = true;
    num *= -1;
  }
  if (digits === undefined) {
    digits = 0;
  }
  Multiplicant = Math.pow(10, digits);
  num = parseFloat((num * Multiplicant).toFixed(11));
  num = (Math.round(num) / Multiplicant).toFixed(2);
  if (isNegative) {
    num = (num * -1).toFixed(2);
  }
  return Number(num);
};

const matrixMultiplication = (A = [1], B = [1]) => {
  const matrices = [A, B];
  const cols = matrices.map((item) => item[0].length);
  if (!matrices.every((item, i) => item.every((row) => row.length === cols[i])))
    return console.error(
      "All rows in a matrix must have equal amount of columns"
    );
  else if (cols[0] !== B.length)
    return console.error(
      "Amount of columns in the 1st matrix must match amount of rows in the 2nd matrix"
    );

  return A.map((rowA) =>
    B[0].map((_, colBIndex) =>
      rowA.reduce(
        (acc, itemA, rowBIndex) => acc + itemA * B[rowBIndex][colBIndex],
        0
      )
    )
  );
};

module.exports = { roundTo, matrixMultiplication };
