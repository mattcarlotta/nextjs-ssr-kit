import Button from "../index";

const initProps = {
	children: "Test",
	type: "button",
};

describe("Styled Button", () => {
	let wrapper;
	let findStyledButton;
	beforeEach(() => {
		wrapper = mount(<Button {...initProps} />);
		findStyledButton = () => wrapper.find("Button");
	});

	it("renders without errors", () => {
		expect(wrapper.find("Button").exists()).toBeTruthy();
	});

	it("initially displays a default button", () => {
		const StyledButton = findStyledButton();
		expect(StyledButton).toHaveStyleRule("color", "#828282");
		expect(StyledButton).toHaveStyleRule("border", "1px solid #828282");

		expect(StyledButton).toHaveStyleRule("color", "#6f6f6f", {
			modifier: ":hover",
		});
		expect(StyledButton).toHaveStyleRule("border-color", "#6f6f6f", {
			modifier: ":hover",
		});
	});

	it("displays a primary button when passed a 'primary' prop", () => {
		wrapper.setProps({ primary: true });
		const StyledButton = findStyledButton();
		expect(StyledButton).toHaveStyleRule("color", "#03a9f3");
		expect(StyledButton).toHaveStyleRule("border", "1px solid #03a9f3");

		expect(StyledButton).toHaveStyleRule("color", "#0f7ae5", {
			modifier: ":hover",
		});
		expect(StyledButton).toHaveStyleRule("border-color", "#0f7ae5", {
			modifier: ":hover",
		});
	});

	it("displays a danger button when passed a 'danger' prop", () => {
		wrapper.setProps({ danger: true });
		const StyledButton = findStyledButton();
		expect(StyledButton).toHaveStyleRule("color", "#f0506e");
		expect(StyledButton).toHaveStyleRule("border", "1px solid #f0506e");

		expect(StyledButton).toHaveStyleRule("color", "#be391c", {
			modifier: ":hover",
		});
		expect(StyledButton).toHaveStyleRule("border-color", "#be391c", {
			modifier: ":hover",
		});
	});
});
