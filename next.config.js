require("./env");
require("./database");
require("./models/all");
const openBrowser = require("react-dev-utils/openBrowser");
const { plugins, rules } = require("./config");

const { NODE_ENV, LOCALHOST } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(LOCALHOST);

module.exports = {
  webpack(config, { isServer }) {
    /* adds custom rules to client and server */
    config.module.rules.push(...rules());

    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  },
};
