import app from "~helpers/setup";
import { seedDatabase } from "~controllers/user";

jest.mock("controllers/user", () => ({
	...require.requireActual("controllers/user"),
	seedDatabase: jest.fn((req, res, done) => done()),
}));

describe("Seed Database Route", () => {
	it("should route to the seedDatabase controller", async () => {
		await app()
			.post("/api/users/seed")
			.then(() => {
				expect(seedDatabase).toHaveBeenCalled();
			});
	});
});
