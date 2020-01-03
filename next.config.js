require("./env");
const { DefinePlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const paths = require("./config/paths");
const { jsRule, mediaRule, styleRule } = require("./config/rules");

const { baseURL, inDevelopment, analyze } = process.env;

const inDev = Boolean(inDevelopment);

const filename = inDev ? paths.staticCSSDevPath : paths.staticCSSProdPath;

const chunkFilename = filename;

const imagesRegex = /\.(jpe?g|png|svg|gif|ico|webp)$/;
const fontsRegex = /\.(woff2|ttf|woff|eot)$/;
const cssRegex = /\.css$/;
const cssModuleRegex = /\.module\.css$/;
const scssRegex = /\.scss$/;
const scssModuleRegex = /\.module\.scss$/;
const sassRegex = /\.sass$/;
const sassModuleRegex = /\.module\.sass$/;

module.exports = {
	webpack(config, { isServer }) {
		const {
			module: { rules },
			optimization: { splitChunks },
			plugins,
			resolve: { extensions },
		} = config;

		/* add custom webpack aliased extensions */
		extensions.push(".css", ".sass", "scss");

		/* add custom webpack rules */
		rules.push(
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
					publicPath: paths.imagesPublicPath,
					outputPath: paths.imagesFolder,
				},
			}),
			/* handle font assets */
			mediaRule({
				test: fontsRegex,
				loader: "file-loader",
				options: {
					publicPath: paths.fontsPublicPath,
					outputPath: paths.fontsFolder,
				},
			}),
			/* handles global CSS imports */
			styleRule({
				test: cssRegex,
				exclude: cssModuleRegex,
				isServer,
			}),
			/* handles CSS module imports */
			styleRule({
				test: cssRegex,
				include: cssModuleRegex,
				modules: true,
				isServer,
			}),
			/* handles global SCSS imports */
			styleRule({
				test: scssRegex,
				exclude: scssModuleRegex,
				isServer,
			}),
			/* handles SCSS module imports */
			styleRule({
				test: scssRegex,
				include: scssModuleRegex,
				modules: true,
				isServer,
			}),
			/* handles global SASS imports */
			styleRule({
				test: sassRegex,
				exclude: sassModuleRegex,
				isServer,
			}),
			/* handles SASS module imports */
			styleRule({
				test: sassRegex,
				include: sassModuleRegex,
				modules: true,
				isServer,
			}),
		);

		if (!isServer) {
			/* caches style chunks for client */
			splitChunks.cacheGroups.styles = {
				name: "styles",
				test: /\.+(scss|sass|css)$/,
				chunks: "all",
				enforce: true,
			};

			plugins.push(
				/* extracts css chunks for client */
				new MiniCssExtractPlugin({
					filename,
					chunkFilename,
				}),
				/* envs for client */
				new DefinePlugin({
					"process.env": {
						inDevelopment: inDev,
						baseURL: JSON.stringify(baseURL),
					},
				}),
			);
		}

		if (analyze) {
			/* analyzes webpack chunk distribution */
			plugins.push(
				new BundleAnalyzerPlugin({
					analyzerMode: "static",
					reportFilename: isServer
						? paths.analyzeServerPath
						: paths.analyzeClientPath,
				}),
			);
		}

		return config;
	},
};
