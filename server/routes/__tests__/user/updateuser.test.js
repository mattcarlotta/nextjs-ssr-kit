import app from "~helpers/setup";
import { updateUser } from "~controllers/user";

jest.mock("controllers/user", () => ({
	...require.requireActual("controllers/user"),
	updateUser: jest.fn((req, res, done) => done()),
}));

describe("Update A User Route", () => {
	it("should route to the updateUser controller", async () => {
		await app()
			.put("/api/users/update/null")
			.then(() => {
				expect(updateUser).toHaveBeenCalled();
			});
	});
});
