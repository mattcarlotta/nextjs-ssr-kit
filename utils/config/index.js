const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const postcssNormalize = require("postcss-normalize");
require("../../env");

const { inDevelopment } = process.env;

const localIdentName = "[local]___[hash:base64:5]";
const name = "[name]-[hash].[ext]";

const postcssLoader = {
	loader: "postcss-loader",
	options: {
		ident: "postcss",
		plugins: () => [
			require("postcss-flexbugs-fixes"),
			require("postcss-preset-env")({
				autoprefixer: {
					flexbox: "no-2009",
				},
				stage: 3,
			}),
			postcssNormalize(),
		],
		sourceMap: !inDevelopment,
	},
};

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

const styleRule = ({
	test,
	include = undefined,
	exclude = undefined,
	modules,
	isServer,
}) => ({
	test,
	include,
	exclude,
	use: [
		!isServer && inDevelopment && "extracted-loader",
		!isServer && MiniCssExtractPlugin.loader,
		{
			loader: isServer ? "css-loader/locals" : "css-loader",
			options: {
				modules,
				minimize: !inDevelopment,
				sourceMap: inDevelopment,
				importLoaders: 1,
				localIdentName,
			},
		},
		postcssLoader,
		"sass-loader",
	].filter(Boolean),
});

module.exports = {
	mediaRule,
	styleRule,
};
