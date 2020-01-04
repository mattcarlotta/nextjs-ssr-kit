import * as types from "~types";
import userReducer, { initialState } from "../index";

const users = [
	{
		address: {
			street: "123 St.",
			state: "CA",
			suite: "1404",
			city: "SJ",
			zipCode: "55555",
		},
		backgroundInfo: "Hi.",
		email: "test@test.com",
		firstName: "Bob",
		lastName: "Dole",
		userName: "bobdole",
		_id: "123456789",
	},
];

describe("User Reducer", () => {
	it("initially matches the initialState pattern", () => {
		expect(userReducer(undefined, { payload: {}, type: "" })).toEqual(
			initialState,
		);
	});

	it("sets user data", () => {
		const state = userReducer(undefined, {
			type: types.USERS_SET_DATA,
			payload: { users },
		});

		expect(state).toEqual({
			data: users,
			isLoading: false,
		});
	});

	it("resets users data", () => {
		let state = userReducer(undefined, {
			type: types.USERS_SET_DATA,
			payload: { users },
		});

		state = userReducer(state, {
			type: types.USERS_FETCH,
		});

		expect(state).toEqual(initialState);
	});
});
