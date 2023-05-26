/**
 * @param {number[]} value
 * @returns {number[]}
 */
export const sawNormalize = (values, { min, max, isCost = false } = {}) => {
  if (!Array.isArray(values)) {
    throw new Error("Values is not an array");
  }
  const minValue = min || Math.min(...values);
  const maxValue = max || Math.max(...values);

  return values.map((v) => {
    if (isCost) {
      return minValue / v;
    }

    return v / maxValue;
  });
};

/**
 *
 * @param {number[][]} criteria
 * @param {number[]} weights
 * @returns {Number[]}
 */
const simpleAdditiveWeighting = (criteria, weights) => {
  if (criteria[0].length !== weights.length) {
    throw new Error("Data shape not match!");
  }
  const scores = [];

  criteria.map((c) => {
    let score = 0;

    weights.map((w, j) => {
      score += c[j] * w;
    });

    scores.push(score);
  });

  return scores;
};

export default simpleAdditiveWeighting;
