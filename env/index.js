const dotenv = require("dotenv");

const { NODE_ENV } = process.env;

dotenv.config({
	path: `${__dirname}/.env.${NODE_ENV}`,
});
