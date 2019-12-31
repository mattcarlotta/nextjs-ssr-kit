import app from "~helpers/setup";
import { getUsers } from "~controllers/user";

jest.mock("controllers/user", () => ({
	...require.requireActual("controllers/user"),
	getUsers: jest.fn((req, res, done) => done()),
}));

describe("Get All Users Route", () => {
	it("should route to the get users controller", async () => {
		await app()
			.get("/api/users")
			.then(() => {
				expect(getUsers).toHaveBeenCalled();
			});
	});
});
