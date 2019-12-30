import bodyParser from "body-parser";
import morgan from "morgan";
import compression from "compression";
import moment from "moment-timezone";
import "@database";

const { inProduction, inTesting } = process.env;

//= ===========================================================//
/* SERVER MIDDLEWARE */
//= ===========================================================//
export default server => {
	morgan.token("date", () => moment().format("MMMM Do YYYY, h:mm:ss a")); // date access log
	if (!inTesting)
		server.use(
			morgan(
				inProduction
					? ":remote-addr [:date] :referrer :method :url HTTP/:http-version :status :res[content-length]"
					: "tiny",
			),
		); // logging framework
	server.use(
		compression({
			level: 6, // set compression level from 1 to 9 (6 by default)
			filter: (req, res) =>
				req.headers["x-no-compression"] ? false : compression.filter(req, res), // set predicate to determine whether to compress
		}),
	);
	server.use(bodyParser.json()); // parses header requests (req.body)
	server.use(bodyParser.urlencoded({ extended: true })); // allows objects and arrays to be URL-encoded
	// server.use(passport.initialize()); // initialize passport routes to accept req/res/next
	server.set("json spaces", 2); // sets JSON spaces for clarity
};
