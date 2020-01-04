import app from "~helpers/setup";
import * as userRoutes from "~controllers/user";

jest.mock("controllers/user", () => ({
	getUsers: jest.fn((req, res, done) => done()),
	createUser: jest.fn((req, res, done) => done()),
	deleteUser: jest.fn((req, res, done) => done()),
	seedDatabase: jest.fn((req, res, done) => done()),
	updateUser: jest.fn((req, res, done) => done()),
}));

describe("User Routing", () => {
	it("should route to the get users controller", async () => {
		await app()
			.get("/api/users")
			.then(() => {
				expect(userRoutes.getUsers).toHaveBeenCalled();
			});
	});

	it("should route to the createUser controller", async () => {
		await app()
			.post("/api/users/create")
			.then(() => {
				expect(userRoutes.createUser).toHaveBeenCalled();
			});
	});

	it("should route to the deleteUser controller", async () => {
		await app()
			.delete("/api/users/delete/null")
			.then(() => {
				expect(userRoutes.deleteUser).toHaveBeenCalled();
			});
	});

	it("should route to the seedDatabase controller", async () => {
		await app()
			.post("/api/users/seed")
			.then(() => {
				expect(userRoutes.seedDatabase).toHaveBeenCalled();
			});
	});

	it("should route to the updateUser controller", async () => {
		await app()
			.put("/api/users/update/null")
			.then(() => {
				expect(userRoutes.updateUser).toHaveBeenCalled();
			});
	});
});
