const bluebird = require("bluebird");
const mongoose = require("mongoose");
const { logErrorMessage, logInfoMessage } = require("../logger");

const { DATABASE, NODE_ENV } = process.env;
const inTesting = NODE_ENV === "testing";

const options = {
  useNewUrlParser: true, // avoids DeprecationWarning: current URL string parser is deprecated
  useCreateIndex: true, // avoids DeprecationWarning: collection.ensureIndex is deprecated.
  useFindAndModify: false, // avoids DeprecationWarning: collection.findAndModify is deprecated.
  useUnifiedTopology: true, // avoids DeprecationWarning: current Server Discovery and Monitoring engine is deprecated
};

module.exports.connectDatabase = () =>
  mongoose.createConnection(`mongodb://localhost/${DATABASE}`, options);

mongoose.connect(`mongodb://localhost/${DATABASE}`, options); // connect to our mongodb database

mongoose.Promise = bluebird; // bluebird for mongoose promises

if (!inTesting) {
  mongoose.connection.on(
    "connected",
    () => logInfoMessage(`Connected to ${DATABASE}`), // log mongodb connection established
  );

  mongoose.connection.on(
    "disconnected",
    () => logInfoMessage(`Disconnected from ${DATABASE}`), // log mongodb connection disconnected
  );

  mongoose.connection.on(
    "error",
    () => logErrorMessage(`Connection error to ${DATABASE}`), // log mongodb connection error
  );

  process.on("SIGINT", () => {
    mongoose.connection.close(() => {
      logInfoMessage(`Connection was manually terminated from ${DATABASE}`);
      process.exit(0);
    });
  });
}
