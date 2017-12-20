/* eslint no-useless-escape:0 */
const buildSelector = obj =>
  Object.keys(obj)
    .map(k => {
      const cnt = obj[k].replace(/["\\]/g, '\\$&');
      return `[${k}="${cnt}"]`;
    })
    .join('');

export default buildSelector;
