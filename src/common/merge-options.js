import _ from 'underscore';

// Merge `keys` from `options` onto `this`
const mergeOptions = function(options, keys) {
  if (!options) { return; }
  _.extend(this, _.pick(options, keys));
};

export default mergeOptions;
