require("./env");
const openBrowser = require("react-dev-utils/openBrowser");
const plugins = require("./config/plugins");

const { CLIENT, NODE_ENV } = process.env;

/* opens a browser window */
if (NODE_ENV === "development") openBrowser(CLIENT);

module.exports = {
  webpack(config, { isServer }) {
    /* adds custom plugins to client and server */
    config.plugins.push(...plugins(isServer));

    /* return new config to next */
    return config;
  },
};
