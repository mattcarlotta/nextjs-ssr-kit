#!/usr/bin/env node
/* eslint-disable */
const fs = require("fs-extra");
const chalk = require("chalk");
const execAsync = require("../config/execAsync");

const { log } = console;

(async () => {
	try {
		log(
			`${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
				"Removing old build folder...",
			)}`,
		);
		await execAsync("rimraf build");

		log(
			`${chalk.rgb(7, 54, 66).bgRgb(36, 201, 39)(" S ")} ${chalk.white(
				"Removed old folder.",
			)}`,
		);

		log(
			`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
				"Compiling API production assets...",
			)}`,
		);

		await execAsync(
			"babel ./server -d build --no-comments --ignore **/__tests__,**/__mocks__,**/coverage",
		);

		log(
			`${chalk.rgb(7, 54, 66).bgRgb(36, 201, 39)(" S ")} ${chalk.white(
				"Build complete.",
			)}`,
		);

		log(
			`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
				"Copying production envs...",
			)}`,
		);

		await fs.copy(
			"./server/env/.env.production",
			"./build/env/.env.production",
			{
				overwrite: false,
				errorOnExist: true,
			},
		);

		log(
			`${chalk.rgb(7, 54, 66).bgRgb(36, 201, 39)(" S ")} ${chalk.white(
				"Copied production envs.",
			)}`,
		);
	} catch (err) {
		console.log(`\n${chalk.red(`Unable to build API: ${err.toString()}`)}`);
		process.exit(1);
	}
})();
/* eslint-enable */
