import "@env";
import express from "express";
import next from "next";
import middlewares from "./middlewares";

const { PORT, HOST, inDevelopment, inProduction } = process.env;

const app = next({ dev: inDevelopment });
const handle = app.getRequestHandler();

//= ===========================================================//
// CREATE EXPRESS SERVER                                       //
//= ===========================================================//

app.prepare().then(() => {
	const server = express();

	middlewares(server);

	server.get("*", (req, res) => handle(req, res));

	server.listen(PORT, err => {
		if (!err) {
			if (!inProduction) {
				console.log(
					`Your application is running on \x1b[1m${HOST}${PORT}\x1b[0m\n`,
				);
			}
		} else {
			console.err(`\nUnable to start server: ${err}`);
		}
	});
});
