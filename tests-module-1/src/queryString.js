module.exports.queryString = obj =>
  (entries = Object.entries(obj)
    .map(([key, val]) => `${key}=${val}`)
    .join('&'));
