import Input from "../index";

const handleChange = jest.fn();

const initProps = {
	hasError: false,
	isRequired: true,
	name: "test",
	label: "test",
	handleChange,
	value: "",
};

describe("Display User List", () => {
	let wrapper;
	beforeEach(() => {
		wrapper = mount(<Input {...initProps} />);
	});

	it("renders without errors", () => {
		expect(wrapper.find("div#input-container").exists()).toBeTruthy();
		expect(wrapper.find("input")).toHaveStyleRule("border: 1px solid #d3d3d3");
	});

	it("add a red border if 'hasError' is true", () => {
		wrapper.setProps({ hasError: true });

		expect(wrapper.find("input")).toHaveStyleRule("border: 1px solid #d03916");
	});
});
