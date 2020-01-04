#!/usr/bin/env node
/* eslint-disable */
const chalk = require("chalk");
const execAsync = require("../config/execAsync");

const { log } = console;

(async () => {
	try {
		log(
			`${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
				"Removing old static build folder...",
			)}`,
		);
		await execAsync("rimraf .next/static");

		log(
			`${chalk.rgb(7, 54, 66).bgRgb(36, 201, 39)(" S ")} ${chalk.white(
				"Removed old folder.",
			)}`,
		);

		log(
			`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
				"Building client production assets...",
			)}`,
		);
		await execAsync("next build");

		log(
			`${chalk.rgb(7, 54, 66).bgRgb(36, 201, 39)(" S ")} ${chalk.white(
				"Build complete.",
			)}`,
		);
	} catch (err) {
		console.log(`\n${chalk.red(`Unable to build API: ${err.toString()}`)}`);
		process.exit(1);
	}
})();
/* eslint-enable */
