import * as types from "~types";
import * as actions from "../index";

describe("Server Actions", () => {
	it("returns RESET_SERVER_MESSAGES", () => {
		const value = actions.resetMessage();

		expect(value).toEqual({ type: types.RESET_SERVER_MESSAGES });
	});

	it("returns SERVER_MESSAGE", () => {
		const value = actions.setMessage();

		expect(value).toEqual({ type: types.SERVER_MESSAGE });
	});

	it("returns SERVER_ERROR with a message", () => {
		const payload = "Invalid request.";

		const value = actions.setError(payload);

		expect(value).toEqual({ type: types.SERVER_ERROR, payload });
	});
});
