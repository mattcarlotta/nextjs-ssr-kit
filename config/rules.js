const {
	fontsPublicPath,
	fontsFolder,
	imagesPublicPath,
	imagesFolder,
} = require("./paths");
const { jsRule, mediaRule, styleRule } = require("./helpers");

const { inDevelopment } = process.env;

const inDev = inDevelopment === "true";

const imagesRegex = /\.(jpe?g|png|svg|gif|ico|webp)$/;
const fontsRegex = /\.(woff2|ttf|woff|eot)$/;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const scssRegex = /\.scss$/;
const scssModuleRegex = /\.module\.scss$/;
const sassRegex = /\.sass$/;
const sassModuleRegex = /\.module\.sass$/;

const styleRules = [
	{
		/* handles global CSS imports */
		test: cssRegex,
		exclude: cssModuleRegex,
	},
	{
		/* handles CSS module imports */
		test: cssRegex,
		include: cssModuleRegex,
		modules: true,
	},
	{
		/* handles global SCSS imports */
		test: scssRegex,
		exclude: scssModuleRegex,
	},
	{
		/* handles SCSS module imports */
		test: scssRegex,
		include: scssModuleRegex,
		modules: true,
	},
	{
		/* handles global SASS imports */
		test: sassRegex,
		exclude: sassModuleRegex,
	},
	{
		/* handles SASS module imports */
		test: sassRegex,
		include: sassModuleRegex,
		modules: true,
	},
];

module.exports = isServer => [
	/* lints js files */
	jsRule({
		loader: "eslint-loader",
		options: {
			cache: inDev,
			emitWarning: inDev,
		},
	}),
	/* handle image assets */
	mediaRule({
		test: imagesRegex,
		loader: "url-loader",
		options: {
			limit: 8192,
			fallback: "file-loader",
			publicPath: imagesPublicPath,
			outputPath: imagesFolder,
		},
	}),
	/* handle font assets */
	mediaRule({
		test: fontsRegex,
		loader: "file-loader",
		options: {
			publicPath: fontsPublicPath,
			outputPath: fontsFolder,
		},
	}),
	...styleRules.map(options => styleRule({ ...options, isServer })),
];
