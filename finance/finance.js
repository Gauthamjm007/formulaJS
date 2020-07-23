const { roundTo } = require("../globalFunctions");

const finance = {
  simpleInterest: function (p = 0, t = 0, r = 0) {
    let interest = p * t * r;
    return {
      interest: roundTo(interest, 2),
      newAmount: roundTo(interest + p, 2),
    };
  },
  compoundInterest: function (p = 0, t = 0, r = 0) {
    let newAmount = p * Math.pow(1 + r, t);
    return {
      interest: roundTo(newAmount - p, 2),
      newAmount: roundTo(interest, 2),
    };
  },
};
