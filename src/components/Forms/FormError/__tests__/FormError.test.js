import FieldError from "../index";

const initProps = {
	hasError: "",
};

const wrapper = mount(<FieldError {...initProps} />);

describe("FieldError", () => {
	it("renders an empty span", () => {
		expect(wrapper.find("div").exists()).toBeFalsy();
	});

	it("displays an error", () => {
		const hasError = "Invalid input.";
		wrapper.setProps({ hasError });

		expect(wrapper.find("p").text()).toEqual(hasError);
	});
});
