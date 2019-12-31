const withCSS = require("@zeit/next-css");
const withImages = require("next-images");
require("./env");

module.exports = withCSS(
	withImages({
		publicRuntimeConfig: {
			inDevelopment: process.env.inDevelopment,
			baseURL: process.env.baseURL,
		},
	}),
);
