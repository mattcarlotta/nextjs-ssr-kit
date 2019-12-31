import chalk from "chalk";

const { PORT, HOST, inDevelopment } = process.env;
const { log } = console;

/* istanbul ignore next */
const greetMessage = () => {
	log(
		`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" I ")} ${chalk.white(
			`Your application is running on ${chalk
				.rgb(250, 182, 23)
				.bold(`${HOST}${PORT}`)}`,
		)}\n`,
	);
	if (inDevelopment) {
		log(
			`${chalk.rgb(7, 54, 66).bgRgb(238, 232, 213)(" N ")} ${chalk.white(
				`Note that the development build is not optimized.`,
			)}`,
		);
		log(
			`${chalk.rgb(7, 54, 66).bgRgb(238, 232, 213)(" N ")} ${chalk.white(
				`To create a production build, use ${chalk
					.rgb(88, 108, 100)
					.bold("yarn build")} and ${chalk
					.rgb(88, 108, 100)
					.bold("yarn compile")}.\n`,
			)}\n`,
		);
	}
};

const sendError = (err, res) => res.status(400).json({ err: err.toString() });

export { greetMessage, sendError };
