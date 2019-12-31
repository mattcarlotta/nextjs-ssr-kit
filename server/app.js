import "~env";
import next from "next";
import express from "express";
import middlewares from "~middlewares";
import routes from "~routes";

const { PORT, HOST, inProduction, inDevelopment } = process.env;

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
			if (!err) {
				if (!inProduction) {
					console.log(
						`Your application is running on \x1b[1m${HOST}${PORT}\x1b[0m\n`,
					);
				}
			} else {
				throw `\nUnable to start server: ${err}`;
			}
		});
	} catch (error) {
		console.log(error.toString());
		process.exit(1);
	}
})();
