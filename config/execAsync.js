const { exec } = require("child_process");

module.exports = cmd =>
	new Promise((res, rej) => {
		exec(cmd, err => {
			if (err) rej(err);
			res();
		});
	});
