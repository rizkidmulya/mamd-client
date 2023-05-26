/**
 *
 * @param {string} c
 */
const camelToTitle = (c) => {
  const result = c.replace(/([A-Z])/g, " $1");

  return result.charAt(0).toUpperCase() + result.slice(1);
};

export default camelToTitle;
