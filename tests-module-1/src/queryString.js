module.exports.queryString = obj =>
  (entries = Object.entries(obj)
    .map(([key, val]) => {
      if (typeof val === 'object' && !Array.isArray(val)) {
        throw new Error('Value should not be an object');
      }
      return `${key}=${val}`;
    })
    .join('&'));
