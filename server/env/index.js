import dotenv from "dotenv";

const currentDirectory = process.cwd();
const { NODE_ENV } = process.env;

dotenv.config({ path: `${currentDirectory}/server/env/.env.${NODE_ENV}` });
