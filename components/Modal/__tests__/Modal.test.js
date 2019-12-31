import Modal from "../index";

const onClick = jest.fn();

const initProps = {
	children: <h1>Example Modal Content</h1>,
	maxWidth: "",
	title: "Hello",
};

const wrapper = mount(<Modal {...initProps} />);

describe("Modal", () => {
	it("renders a modal with some sample content without errors", () => {
		expect(wrapper.find("Modal").exists()).toBeTruthy();
	});

	it("calls a passed in 'onClick' prop function", () => {
		wrapper.setProps({ onClick });

		wrapper.find("button").simulate("click");
		expect(onClick).toHaveBeenCalled();
	});
});
