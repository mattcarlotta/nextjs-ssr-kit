module.exports = (
	isServer,
	{
		optimization: {
			splitChunks: { cacheGroups },
		},
	},
) =>
	!isServer
		? {
				...cacheGroups,
				styles: {
					/* caches style chunks for client */
					name: "styles",
					test: /\.+(scss|sass|css)$/,
					chunks: "all",
					enforce: true,
				},
		  }
		: cacheGroups;
