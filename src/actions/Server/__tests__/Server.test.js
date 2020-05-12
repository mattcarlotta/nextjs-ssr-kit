import * as constants from "~constants";
import * as actions from "../index";

describe("Server Actions", () => {
	it("returns RESET_SERVER_MESSAGES", () => {
		const value = actions.resetMessage();

		expect(value).toEqual({ type: constants.RESET_SERVER_MESSAGES });
	});

	it("returns SERVER_MESSAGE", () => {
		const value = actions.setMessage();

		expect(value).toEqual({ type: constants.SERVER_MESSAGE });
	});

	it("returns SERVER_ERROR with a message", () => {
		const payload = "Invalid request.";

		const value = actions.setError(payload);

		expect(value).toEqual({ type: constants.SERVER_ERROR, payload });
	});
});
