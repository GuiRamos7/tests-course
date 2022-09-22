const keyValueToString = ([key, val]) => {
  if (typeof val === 'object' && !Array.isArray(val)) {
    throw new Error('Value should not be an object');
  }
  return `${key}=${val}`;
};

module.exports.queryString = obj =>
  (entries = Object.entries(obj).map(keyValueToString).join('&'));

module.exports.parse = string =>
  Object.fromEntries(
    string.split('&').map(item => {
      let [key, value] = item.split('=');

      if (value.indexOf(',') > -1) {
        value = value.split(',');
      }
      return [key, value];
    }),
  );
