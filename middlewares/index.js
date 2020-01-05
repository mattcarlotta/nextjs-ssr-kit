/* eslint disable */
import bodyParser from "body-parser";
import compression from "compression";
import morgan from "morgan";
import moment from "moment-timezone";
import pify from "pify";

const { inProduction } = process.env;

export default async (req, res, cb) => {
	try {
		morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a"));

		await pify(
			compression({
				level: 6,
				filter: (req, res) =>
					req.headers["x-no-compression"]
						? false
						: compression.filter(req, res),
			}),
		)(req, res);

		await pify(
			morgan(
				inProduction
					? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
					: "tiny",
			),
		)(req, res);

		await pify(bodyParser.urlencoded({ extended: true }))(req, res);

		cb(req, res);
	} catch (error) {
		return res.status(404).json({ err: err.toString() });
	}
};
/* eslint enable */
