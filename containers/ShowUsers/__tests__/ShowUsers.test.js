import { ShowUsers } from "../index";

const data = [
	{
		email: "test@test.com",
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
	},
];

const createUser = jest.fn();
const deleteUser = jest.fn();
const fetchUsers = jest.fn();
const seedDB = jest.fn();
const resetMessage = jest.fn();
const updateUser = jest.fn();

const initProps = {
	isLoading: true,
	createUser,
	deleteUser,
	fetchUsers,
	seedDB,
	resetMessage,
	updateUser,
	serverError: "",
	serverMessage: "",
	data: [],
};

describe("Show Users Container", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<ShowUsers {...initProps} />);
	});

	afterEach(() => {
		fetchUsers.mockClear();
	});

	it("initially renders a 'LoadingUsers' placeholder component", () => {
		expect(wrapper.find("LoadingUsers").exists()).toBeTruthy();
		expect(fetchUsers).toHaveBeenCalledTimes(1);
	});

	it("handles editing a user card inline", () => {
		const id = "0123456789";
		wrapper.instance().handleEditClick(id);

		expect(wrapper.state("isEditingID")).toEqual(id);

		wrapper.instance().handleResetEditClick();

		expect(wrapper.state("isEditingID")).toEqual("");
	});

	it("toggles a 'Modal' to display a 'Create New User' from", () => {
		wrapper.instance().handleOpenModal();

		expect(wrapper.find("Modal").exists()).toBeTruthy();

		wrapper.instance().handleCloseModal();

		expect(wrapper.find("Modal").exists()).toBeFalsy();
	});

	it("displays a 'DisplayUserList' if data is present", () => {
		wrapper.setProps({ data, isLoading: false });

		expect(wrapper.find("DisplayUserList").exists()).toBeTruthy();
	});
});
