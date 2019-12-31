import FieldError from "../index";

const initProps = {
	isRequired: true,
	hasError: false,
};

const wrapper = mount(<FieldError {...initProps} />);

describe("FieldError", () => {
	it("renders an empty span", () => {
		expect(wrapper.find("span").text()).toEqual("\u00a0");
	});

	it("displays an error", () => {
		wrapper.setProps({ hasError: true });
		expect(wrapper.find("span").text()).toEqual("Required");
	});
});
