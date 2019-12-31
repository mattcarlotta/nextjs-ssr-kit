import app from "~helpers/setup";
import { createUser } from "~controllers/user";

jest.mock("controllers/user", () => ({
	...require.requireActual("controllers/user"),
	createUser: jest.fn((req, res, done) => done()),
}));

describe("Create A User Route", () => {
	it("should route to the createUser controller", async () => {
		await app()
			.post("/api/users/create")
			.then(() => {
				expect(createUser).toHaveBeenCalled();
			});
	});
});
