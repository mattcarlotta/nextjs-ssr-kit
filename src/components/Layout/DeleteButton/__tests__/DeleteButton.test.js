import DeleteButton from "../index";

const initProps = {
	onClick: jest.fn(),
};

const wrapper = mount(<DeleteButton {...initProps} />);

describe("DeleteButton", () => {
	it("renders without errors", () => {
		expect(wrapper.find("button").exists()).toBeTruthy();
	});
});
