import Input from "../index";

const onHandleChange = jest.fn();

const initProps = {
	hasError: false,
	isRequired: true,
	name: "test",
	label: "test",
	onHandleChange,
	value: "",
};

describe("Display User List", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = shallow(<Input {...initProps} />);
	});

	it("renders without errors", () => {
		expect(wrapper.find("div.inputContainer").exists()).toBeTruthy();
	});

	it("add a 'hasFieldError' if 'hasError' is true", () => {
		wrapper.setProps({ hasError: true });

		expect(wrapper.find("input").props().className).toContain("hasFieldError");
	});
});
