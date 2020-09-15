/* eslint-disable */
// @ts-nocheck
const normalizeOptions = options =>
  options.modifier
    ? Object.assign({}, options, {
        modifier: Array.isArray(options.modifier)
          ? options.modifier.join("")
          : options.modifier,
      })
    : options;

export default normalizeOptions;
/* eslint-enable */
