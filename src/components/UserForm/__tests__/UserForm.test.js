import UserForm from "../index";

const data = {
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
};

const filledFields = {
	email: "test@test.com",
	firstName: "Bob",
	lastName: "Dole",
	userName: "Bob Dole",
	backgroundInfo: "Cool.",
	street: "123 Galena St.",
	state: "GA",
	suite: "",
	city: "Atlanta",
	zipCode: "55555",
};

const cancelUpdate = jest.fn();
const submitAction = jest.fn();
const resetForm = jest.fn();
const resetMessage = jest.fn();

const initProps = {
	_id: "",
	isEditing: false,
	cancelUpdate,
	submitAction,
	resetForm,
	resetMessage,
	serverError: "",
	serverMessage: "",
};

describe("User Form Container", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<UserForm {...initProps} />);
	});

	afterEach(() => {
		cancelUpdate.mockClear();
		submitAction.mockClear();
		resetForm.mockClear();
		resetMessage.mockClear();
	});

	it("renders without errors", () => {
		expect(wrapper.find("form").exists()).toBeTruthy();
	});

	it("calls 'handleChange' to update form fields", () => {
		const name = "userName";
		const value = "bobdole";
		wrapper
			.find("input#userName")
			.simulate("change", { target: { name, value } });

		expect(wrapper.state("userName")).toEqual(value);
	});

	it("seeds fields with props data and exposes a cancel button", () => {
		wrapper = mount(<UserForm {...initProps} {...data} isEditing />);

		expect(wrapper.find("form").props().style).toEqual({ padding: 10 });

		expect(wrapper.find("input#userName").props().value).toEqual(data.userName);

		const cancelButton = wrapper.find("button#cancel");
		expect(cancelButton.exists()).toBeTruthy();

		cancelButton.simulate("click");

		expect(cancelUpdate).toHaveBeenCalledTimes(1);
	});

	it("displays errors when a form is submitted with empty fields", () => {
		wrapper.find("form").simulate("submit");

		expect(wrapper.find("span#error")).toHaveLength(9);
		expect(wrapper.state("submitted")).toBeTruthy();

		wrapper.find("form").simulate("submit");
		expect(submitAction).toHaveBeenCalledTimes(0);
	});

	it("handles valid form submissions", () => {
		wrapper.setState({ ...filledFields });
		wrapper.find("form").simulate("submit");

		expect(submitAction).toHaveBeenCalledWith({ props: data, id: "" });
	});

	it("displays an API error", () => {
		const serverError = "Network Error";
		wrapper.setProps({ serverError });

		expect(wrapper.find("p#form-error").text()).toEqual(serverError);
	});

	it("calls 'resetForm' if an API success message is set", () => {
		wrapper.setProps({ serverMessage: "Successfully added a user!" });

		expect(resetForm).toHaveBeenCalledTimes(1);
	});

	it("calls 'resetMessage' when the form is unmounted", () => {
		wrapper.unmount();

		expect(resetMessage).toHaveBeenCalledTimes(1);
	});
});
