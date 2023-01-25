// Find key by value

const findKey = (object, ...values) => {
  return Object.keys(object).find((key) =>
    object[key] === values[0]);
};

require('../Tests/find.js')(findKey);
