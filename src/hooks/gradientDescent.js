/**
 *
 * @param {number[]} coeffs
 * @param {number[]} xs
 * @link https://towardsdatascience.com/polynomial-regression-gradient-descent-from-scratch-279db2936fe9
 */
const calcGradient = (coeffs, xs) => {
  const degree = [];
  const ys = [];

  coeffs.map((c, i) => {
    degree.push(i);
  });

  xs.map((x) => {
    let value = 0;

    degree.map((d, c) => {
      value += coeffs[c] * Math.pow(x, d);
    });

    ys.push(value);
  });

  return ys;
};

const fit = async (
  xs,
  ys,
  { learningRate = 0.002, epochs = 100, initialCoeffs = [0, 0, 0] } = {}
) => {
  let weights = initialCoeffs;
  const mse = [];

  for (var epoch = 0; epoch < epochs; epoch++) {
    let epochMse = 0;

    xs.map((x, i) => {
      const degree = [];
      const newWeights = [];
      const pred = calcGradient(weights, [x])[0];
      const error = pred - ys[i];

      epochMse += Math.pow(error, 2);

      // a
      // ax + b
      // ax^2 + bx + c
      weights.map((w, p) => {
        degree.push(w - error * Math.pow(x, p) * learningRate);
      });

      weights = degree;
    });
    epochMse = epochMse / xs.length;
    mse.push(epochMse);
  }

  return {
    predict: (x) => {
      return calcGradient(weights, [x])[0];
    },
    weights,
    mse,
  };
};

export default fit;
