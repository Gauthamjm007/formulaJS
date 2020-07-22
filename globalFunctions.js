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

module.exports = { roundTo };
