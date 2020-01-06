const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const ignoreFolders = /(\.next)|(\.git)|(node_modules)|(public)|(server)|(src)/;

const readDirectory = path =>
	readdirSync(path).reduce((acc, folder) => {
		const dirPath = `${path}${folder}`;
		if (
			!folder.match(ignoreFolders) &&
			statSync(resolve(dirPath)).isDirectory()
		) {
			acc[`~${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
		}

		return acc;
	}, {});

const alias = {
	...readDirectory("./"),
	...readDirectory("./src/"),
};

module.exports = api => {
	api.cache(true);

	return {
		presets: ["next/babel"],
		plugins: [
			[
				"module-resolver",
				{
					alias,
				},
			],
			[
				"styled-components",
				{
					ssr: true,
					displayName: true,
					preprocess: false,
				},
			],
			"lodash",
		],
	};
};
