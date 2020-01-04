import ExampleIcon from "../index";

const initProps = {
	onClick: jest.fn(),
};
const wrapper = shallow(<ExampleIcon {...initProps} />);
describe("ExampleIcon", () => {
	it("renders without errors", () => {
		expect(wrapper.find("svg").exists()).toBeTruthy();
	});
});
