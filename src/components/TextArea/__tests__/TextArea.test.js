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
		wrapper = mount(<TextArea {...initProps} />);
	});

	it("renders without errors", () => {
		expect(wrapper.find("div#textarea-container").exists()).toBeTruthy();
		expect(wrapper.find("textarea")).toHaveStyleRule(
			"border: 1px solid #d3d3d3",
		);
	});

	it("add a red border if 'hasError' is true", () => {
		wrapper.setProps({ hasError: true });

		expect(wrapper.find("textarea")).toHaveStyleRule(
			"border: 1px solid #d03916",
		);
	});
});
