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
  }, //loan period prinipal in any currency,rate of interest in percentage number ,tenature in months number,mortorium in months maximum of 12 months and number
  loanPeriod: function (principal, annual_rate, tenature, moratorium) {
    function compoundInterest(principal, annual_rate, tenature_month) {
      return (
        principal +
        Number(
          (
            principal *
            (Math.pow(1 + annual_rate / 100 / 12, tenature_month) - 1)
          ).toFixed(2)
        )
      );
    }

    principal = compoundInterest(principal, moratorium, annual_rate);
    const permonthEMI = finance.emi(principal, tenature, annual_rate);
    let years = tenature / 12;

    let allmonths = [];
    let temp_tenature = tenature;

    if (tenature < 9) {
      allmonths.push(tenature);
    } else {
      for (let i = 0; i < Math.round(years); i++) {
        if (allmonths.length === 0) {
          allmonths.push(12 - moratorium);
          temp_tenature = temp_tenature - (12 - moratorium);
        } else if (temp_tenature < 12) {
          allmonths.push(temp_tenature);
        } else {
          allmonths.push(12);
          temp_tenature = temp_tenature - 12;
        }
      }
    }
    let perMonth = roundTo(permonthEMI, 2);
    let total = roundTo(permonthEMI * tenature, 2);

    allmonths = allmonths.filter((ele) => ele > 0);
    if (allmonths.length === 1) allmonths.push(0, 0);
    if (allmonths.length === 2) allmonths.push(0);

    let allyearsEMI = allmonths.map((emi, i) =>
      emi > 0
        ? Math.round(Number((emi * Number(permonthEMI.toFixed(2))).toFixed(2)))
        : 0
    );
    const monthlyEMIForThatYear = allyearsEMI.map((data, i) => {
      return { ["year" + String(i + 1)]: roundTo(data / 12, 2) };
    });

    allyearsEMI = allyearsEMI.map((data, i) => {
      return { ["year" + String(i + 1)]: roundTo(data, 2) };
    });
    return { perMonth, total, allyearsEMI, monthlyEMIForThatYear };
  },
};

// console.log(EMICalculator(1000, 10, 6));
console.log(loanPeriod(10000, 10, 56, 3));
