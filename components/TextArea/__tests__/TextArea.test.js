import TextArea from "../index";

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
		wrapper = shallow(<TextArea {...initProps} />);
	});

	it("renders without errors", () => {
		expect(wrapper.find("div.textAreaContainer").exists()).toBeTruthy();
	});

	it("add a 'hasFieldError' if 'hasError' is true", () => {
		wrapper.setProps({ hasError: true });

		expect(wrapper.find("textarea").props().className).toContain(
			"hasFieldError",
		);
	});
});
