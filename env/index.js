/* eslint-disable */
const chalk = require("chalk");
const dotenv = require("dotenv");
const { statSync } = require("fs");
const { resolve } = require("path");

const { DATABASE, NODE_ENV } = process.env;
const path = `env/.env.${NODE_ENV}`;

try {
	if (statSync(resolve(path)).isFile()) {
		dotenv.config({
			path,
		});

		console.log(
			`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" INFO ")} ${chalk.blue(
				`Using ${NODE_ENV} environment variables.`,
			)}`,
		);
	}
} catch (error) {
	if (!DATABASE && (NODE_ENV !== "production" || NODE_ENV !== "staging")) {
		console.log(
			`\n${chalk.rgb(255, 255, 255).bgRgb(255, 17, 0)(" ERROR ")} ${chalk.red(
				`Missing ${NODE_ENV} environment variables!`,
			)}\n`,
		);
		process.exit(1);
	}
}
/* eslint-enable */
