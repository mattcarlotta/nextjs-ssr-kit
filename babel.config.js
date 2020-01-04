const { readdirSync, statSync } = require("fs");
const { resolve } = require("path");

const readDirectory = path =>
	readdirSync(path).reduce((acc, folder) => {
		const dirPath = `${path}${folder}`;
		if (statSync(resolve(dirPath)).isDirectory()) {
			acc[`~${folder.replace(/[^\w\s]/gi, "")}`] = dirPath;
		}

		return acc;
	}, {});

const alias = {
	...readDirectory("./src/"),
	...readDirectory("./server/"),
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
