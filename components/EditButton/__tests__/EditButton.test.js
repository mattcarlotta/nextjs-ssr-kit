import EditButton from "../index";

const initProps = {
	onClick: jest.fn(),
};

const wrapper = mount(<EditButton {...initProps} />);

describe("EditButton", () => {
	it("renders without errors", () => {
		expect(wrapper.find("button").exists()).toBeTruthy();
	});
});
