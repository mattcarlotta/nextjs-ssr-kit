const name = "[name]-[hash].[ext]";

/**
 * Helper function to create a Javascript webpack module rule.
 *
 * @function jsRule
 * @param {string} loader
 * @param {object} options
 * @returns {object}
 */
const jsRule = ({ loader, options }) => ({
  test: /\.(js|mjs|jsx|ts|tsx)$/,
  exclude: /(node_modules)/,
  use: [{ loader, options }],
});

/**
 * Helper function to create a media webpack module rule.
 *
 * @function mediaRule
 * @param {regex} test
 * @param {string} loader
 * @param {object} options
 * @returns {object}
 */
const mediaRule = ({ test, loader, options }) => ({
  test,
  use: [
    {
      loader,
      options: {
        ...options,
        name,
      },
    },
  ],
});

module.exports = {
  jsRule,
  mediaRule,
};
