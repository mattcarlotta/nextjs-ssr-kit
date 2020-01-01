/* eslint-disable */
import { connectDatabase } from "~database";

const { DROPDB } = process.env;

/**
 * Function to tear down the testing Mongo database.
 *
 * @function
 * @async
 * @function connectDatabase - connects to testing Mongo database.
 * @function dropDatabase - drops testing Mongo database.
 * @function close - closes connection to testing Mongo database.
 * @returns {string} - displays a:  PASS  utils/teardownDB.js message to console.
 * @throws {error} - displays a:  FAIL  utils/teardownDB.js message to console with the error.
 */

const teardownDB = async () => {
	const db = connectDatabase();
	try {
		await db.dropDatabase();
		await db.close();
		return console.log(
			"\n\x1b[7m\x1b[32;1m PASS \x1b[0m \x1b[2mutils/\x1b[0m\x1b[1mteardownDB.js",
		);
	} catch (err) {
		return console.log(
			`\n\x1b[7m\x1b[31;1m FAIL \x1b[0m \x1b[2mutils/\x1b[0m\x1b[31;1mteardownDB.js\x1b[0m\x1b[31m\n${err.toString()}\x1b[0m`,
		);
	} finally {
		if (DROPDB) {
			process.exit(0);
		}
	}
};

if (DROPDB) teardownDB();

export default teardownDB;
/* eslint-enable no-console */
