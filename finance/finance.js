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
  emi: function (principal = 0, timePeriod = 0, annual_rate = 12) {
    annual_rate = annual_rate / (12 * 100);
    const emi =
      (principal * annual_rate * Math.pow(annual_rate + 1, timePeriod)) /
      (Math.pow(1 + annual_rate, timePeriod) - 1);
    return roundTo(emi, 2);
  },
};

// console.log(EMICalculator(1000, 10, 6));
