import app from "~helpers/setup";
import { deleteUser } from "~controllers/user";

jest.mock("controllers/user", () => ({
	...require.requireActual("controllers/user"),
	deleteUser: jest.fn((req, res, done) => done()),
}));

describe("Delete A User Route", () => {
	it("should route to the deleteUser controller", async () => {
		await app()
			.delete("/api/users/delete/null")
			.then(() => {
				expect(deleteUser).toHaveBeenCalled();
			});
	});
});
