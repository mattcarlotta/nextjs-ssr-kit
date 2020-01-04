import * as types from "~types";
import * as actions from "../index";

const props = {
	email: "test~test.com",
	firstName: "Bob",
	lastName: "Dole",
	userName: "Bob Dole",
	backgroundInfo: "Cool.",
	address: {
		street: "123 Galena St.",
		state: "GA",
		suite: "",
		city: "Atlanta",
		zipCode: "55555",
	},
};

const id = "123456789";

describe("User Actions", () => {
	it("returns USERS_CREATE with props", () => {
		const value = actions.createUser({ props });

		expect(value).toEqual({ type: types.USERS_CREATE, props });
	});

	it("returns USERS_DELETE with an id", () => {
		const value = actions.deleteUser(id);

		expect(value).toEqual({ type: types.USERS_DELETE, id });
	});

	it("returns USERS_FETCH", () => {
		const value = actions.fetchUsers();

		expect(value).toEqual({ type: types.USERS_FETCH });
	});

	it("returns USERS_SEED", () => {
		const value = actions.seedDB();

		expect(value).toEqual({ type: types.USERS_SEED });
	});

	it("returns USERS_SET_DATA with data", () => {
		const data = [props];
		const value = actions.setUsers(data);

		expect(value).toEqual({ type: types.USERS_SET_DATA, payload: data });
	});

	it("returns USERS_SET_DATA with empty data", () => {
		const value = actions.setUsers();

		expect(value).toEqual({ type: types.USERS_SET_DATA, payload: [] });
	});

	it("returns USERS_UPDATE with props and an id", () => {
		const value = actions.updateUser({ props, id });

		expect(value).toEqual({ type: types.USERS_UPDATE, props, id });
	});
});
