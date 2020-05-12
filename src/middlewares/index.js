/* eslint disable */
import bodyParser from "body-parser";
import morgan from "morgan";
import moment from "moment-timezone";

const { NODE_ENV } = process.env;
const inProduction = NODE_ENV === "production";

export default next => async (req, res) => {
	return new Promise(async resolve => {
		try {
			morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a"));

			const middlewares = [
				morgan(
					inProduction
						? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
						: "tiny",
				),
				bodyParser.urlencoded({ extended: true }),
			].filter(Boolean);

			const promises = middlewares.reduce((acc, middleware) => {
				const promise = new Promise((resolve, reject) => {
					middleware(req, res, result =>
						result instanceof Error ? reject(result) : resolve(result),
					);
				});
				return [...acc, promise];
			}, []);

			await Promise.all(promises);

			return resolve(next(req, res));
		} catch (error) {
			return resolve(res.status(404).json({ err: err.toString() }));
		}
	});
};
/* eslint enable */
