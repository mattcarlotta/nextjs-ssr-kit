/* eslint-disable no-console */
const chalk = require("chalk");
require("../../env");
require("../../models/all");
const { connectDatabase } = require("../index");
const { User } = require("../../models");

const { DATABASE, EXIT, SEED } = process.env;

/**
 * Function to seed the testing Mongo database.
 *
 * @function
 * @async
 * @returns {string} - displays a:  PASS  utils/seedDB.js message to console.
 * @throws {error} - displays a:  FAIL  utils/seedDB.js message to console with the error.
 */
const seedDB = () => {
	return new Promise(async (resolve, reject) => {
		const db = connectDatabase();
		try {
			const databaseExists = User.findOne({ email: "example1@example.com" });
			if (databaseExists) await db.dropDatabase();

			await User.insertMany(seeds);

			await db.close();

			console.log(
				`\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" SEED ")} ${chalk.blue(
					`\x1b[2mutils/\x1b[0m\x1b[1mseedDB.js\x1b[0m (${DATABASE})`,
				)}\n`,
			);

			if (EXIT) process.exit(0);

			return resolve();
		} catch (err) {
			console.log(
				`\n\x1b[7m\x1b[31;1m FAIL \x1b[0m \x1b[2mutils/\x1b[0m\x1b[31;1mseedDB.js\x1b[0m\x1b[31m\n${err.toString()}\x1b[0m`,
			);

			if (EXIT) process.exit(0);

			return reject();
		}
	});
};

if (SEED) seedDB();

module.exports = seedDB;
/* eslint-enable no-console */
