import "~env";
import next from "next";
import express from "express";
import middlewares from "~middlewares";
import routes from "~routes";
import { greetMessage } from "./helpers";

const { PORT, HOST, inDevelopment } = process.env;

const app = next({ dev: inDevelopment });
const handler = app.getRequestHandler();

//= ===========================================================//
// CREATE EXPRESS SERVER                                       //
//= ===========================================================//

(async () => {
	try {
		await app.prepare();
		const server = express();

		middlewares(server);
		routes(server);

		server.get("/users", (req, res) => app.render(req, res, "/users"));

		server.get("*", (req, res) => handler(req, res));

		server.listen(PORT, err => {
			if (err) throw `\nUnable to start server: ${err}`;

			greetMessage();
		});
	} catch (error) {
		console.log(error.toString());
		process.exit(1);
	}
})();
