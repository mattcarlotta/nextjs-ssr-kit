const bluebird = require("bluebird");
const mongoose = require("mongoose");
const chalk = require("chalk");

const { log } = console;
const { DATABASE, inTesting } = process.env;

const options = {
	useNewUrlParser: true, // avoids DeprecationWarning: current URL string parser is deprecated
	useCreateIndex: true, // avoids DeprecationWarning: collection.ensureIndex is deprecated.
	useFindAndModify: false, // avoids DeprecationWarning: collection.findAndModify is deprecated.
	useUnifiedTopology: true, // avoids DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
};

module.exports.connectDatabase = () =>
	mongoose.createConnection(`mongodb://localhost/${DATABASE}`, options);

//= ===========================================================//
//* MONGO DB CONFIG */
//= ===========================================================//
mongoose.connect(`mongodb://localhost/${DATABASE}`, options); // connect to our mongodb database

mongoose.Promise = bluebird; // bluebird for mongoose promises

if (!inTesting) {
	mongoose.connection.on(
		"connected",
		() =>
			log(
				`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" INFO ")} ${chalk.blue(
					`Connected to ${DATABASE}`,
				)}\n`,
			), // log mongodb connection established
	);

	mongoose.connection.on(
		"disconnected",
		() =>
			log(
				`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" INFO ")} ${chalk.rgb(
					34,
					155,
					127,
				)(`Disconnected from ${DATABASE}`)}`,
			), // log mongodb connection disconnected
	);

	mongoose.connection.on(
		"error",
		() =>
			log(
				`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" ERROR ")} ${chalk.red(
					`Connection error to ${DATABASE}`,
				)}`,
			), // log mongodb connection error
	);

	process.on("SIGINT", () => {
		mongoose.connection.close(() => {
			log(
				`${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" INFO ")} ${chalk.magenta(
					`Connection was manually terminated from ${DATABASE}`,
				)}`,
			);
			process.exit(0);
		});
	});
}
