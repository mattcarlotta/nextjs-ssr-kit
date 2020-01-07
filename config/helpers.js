const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");
const autoprefixer = require("autoprefixer");
const postcssFixes = require("postcss-flexbugs-fixes");
const postcssEnv = require("postcss-preset-env")({
	autoprefixer: {
		flexbox: "no-2009",
	},
	stage: 3,
});

const { inDevelopment } = process.env;

const inDev = inDevelopment === "true";
const localIdentName = "[local]___[hash:base64:10]";
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

/**
 * Helper function to create a CSS/SCSS style webpack module rule.
 *
 * @function styleRule
 * @param {regex} test
 * @param {regex} include
 * @param {regex} exclude
 * @param {boolean} modules
 * @param {boolean} isServer
 * @returns {object}
 */
const styleRule = ({
	test,
	include = undefined,
	exclude = undefined,
	modules = false,
	isServer,
}) => ({
	test,
	include,
	exclude,
	use: [
		!isServer && inDev && "extracted-loader",
		!isServer && MiniCssExtractPlugin.loader,
		{
			loader: isServer ? "css-loader/locals" : "css-loader",
			options: {
				modules,
				minimize: !inDev,
				sourceMap: inDev,
				importLoaders: 1,
				localIdentName,
			},
		},
		{
			loader: "postcss-loader",
			options: {
				ident: "postcss",
				plugins: () => [
					postcssFixes,
					postcssEnv,
					autoprefixer(),
					postcssNormalize(),
				],
				sourceMap: !inDev,
			},
		},
		"sass-loader",
	].filter(Boolean),
});

module.exports = {
	jsRule,
	mediaRule,
	styleRule,
};
