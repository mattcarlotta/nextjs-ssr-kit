module.exports = api => {
	const inProd = api.env("production");
	api.cache(() => process.env.NODE_ENV);

	return {
		presets: ["next/babel"],
		plugins: [
			[
				"styled-components",
				{
					ssr: true,
					displayName: true,
					preprocess: false,
				},
			],
			inProd && "react-remove-properties",
		].filter(Boolean),
	};
};
