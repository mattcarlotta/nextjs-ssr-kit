const dotenv = require("dotenv");

const currentDirectory = process.cwd();
const { NODE_ENV } = process.env;

dotenv.config({ path: `${currentDirectory}/env/.env.${NODE_ENV}` });
