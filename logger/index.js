/* eslint-disable no-console */
const chalk = require("chalk");

const logErrorMessage = error =>
  console.log(
    `\n${chalk.rgb(255, 255, 255).bgRgb(255, 17, 0)(" ERROR ")} ${chalk.red(
      `${error}`,
    )}\n`,
  );

const logInfoMessage = message =>
  console.log(
    `\n${chalk.rgb(7, 54, 66).bgRgb(38, 139, 210)(" INFO ")} ${chalk.blue(
      `${message}`,
    )}`,
  );

module.exports = {
  logErrorMessage,
  logInfoMessage,
};
/* eslint-enable no-console */
