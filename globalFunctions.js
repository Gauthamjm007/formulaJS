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

const matrixInverse = () => {
  if (M.length !== M[0].length) {
    return console.error("matrix should be a square");
  }

  var i = 0,
    ii = 0,
    j = 0,
    dim = M.length,
    e = 0,
    t = 0;
  var I = [],
    C = [];
  for (i = 0; i < dim; i += 1) {
    I[I.length] = [];
    C[C.length] = [];
    for (j = 0; j < dim; j += 1) {
      if (i == j) {
        I[i][j] = 1;
      } else {
        I[i][j] = 0;
      }

      C[i][j] = M[i][j];
    }
  }

  for (i = 0; i < dim; i += 1) {
    e = C[i][i];

    if (e == 0) {
      for (ii = i + 1; ii < dim; ii += 1) {
        if (C[ii][i] != 0) {
          for (j = 0; j < dim; j++) {
            e = C[i][j];
            C[i][j] = C[ii][j];
            C[ii][j] = e;
            e = I[i][j];
            I[i][j] = I[ii][j];
            I[ii][j] = e;
          }

          break;
        }
      }

      e = C[i][i];

      if (e == 0) {
        return;
      }
    }

    for (j = 0; j < dim; j++) {
      C[i][j] = C[i][j] / e;
      I[i][j] = I[i][j] / e;
    }
    for (ii = 0; ii < dim; ii++) {
      if (ii == i) {
        continue;
      }
      e = C[ii][i];
      for (j = 0; j < dim; j++) {
        C[ii][j] -= e * C[i][j];
        I[ii][j] -= e * I[i][j];
      }
    }
  }
  return I;
};

module.exports = { roundTo, matrixMultiplication, matrixInverse };
