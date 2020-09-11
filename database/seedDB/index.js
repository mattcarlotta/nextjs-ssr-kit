require("../../env");
require("../../models/all");
const { connectDatabase } = require("../index");
const { User } = require("../../models");
const seeds = require("./seeds");
const { logErrorMessage, logInfoMessage } = require("../../logger");

const { DATABASE, EXIT, SEED } = process.env;

/**
 * Function to seed the testing Mongo database.
 *
 * @async
 * @function seedDB
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

      logInfoMessage(
        `\x1b[2mutils/\x1b[0m\x1b[1mseedDB.js\x1b[0m (${DATABASE})`,
      );

      if (EXIT) process.exit(0);

      return resolve();
    } catch (err) {
      logErrorMessage(`seedDB.js\x1b[0m\x1b[31m\n${err.toString()}\x1b[0m`);

      if (EXIT) process.exit(0);

      return reject();
    }
  });
};

if (SEED) seedDB();

module.exports = seedDB;
