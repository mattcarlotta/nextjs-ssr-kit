import DisplayUserList from "../index";

const data = [
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

const initProps = {
	data: [],
	isEditingID: "",
	onHandleCloseModal: jest.fn(),
	onHandleDeleteClick: jest.fn(),
	onHandleEditClick: jest.fn(),
	onHandleResetEditClick: jest.fn(),
	resetMessage: jest.fn(),
	serverError: "",
	serverMessage: "",
	updateUser: jest.fn(),
};

describe("Display User List", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<DisplayUserList {...initProps} />);
	});

	it("initially displays a 'No Data' component if data is empty", () => {
		expect(wrapper.find("NoData").exists()).toBeTruthy();
	});

	it("displays a 'Card' component if data is present", () => {
		wrapper.setProps({ data });

		expect(wrapper.find("Card").exists()).toBeTruthy();
	});

	it("displays a 'UserForm' component if 'isEditingID' prop matches a data '_id'", () => {
		wrapper.setProps({ data, isEditingID: "123456789" });

		expect(wrapper.find("UserForm").exists()).toBeTruthy();
	});
});
