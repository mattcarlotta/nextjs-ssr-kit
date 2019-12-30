module.exports = {
	webpack(config, options) {
		const { isServer } = options;

		config.module.rules.push({
			test: /\.(jpe?g|png|svg|gif|ico|webp)$/,
			use: [
				{
					loader: "url-loader",
					options: {
						limit: 8192,
						fallback: "file-loader",
						publicPath: `/_next/static/images/`,
						outputPath: `${isServer ? "../" : ""}static/images/`,
						name: "[name]-[hash].[ext]",
					},
				},
			],
		});

		return config;
	},
};
