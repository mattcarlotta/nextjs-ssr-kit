import Divider from "../index";

const wrapper = shallow(<Divider />);
describe("Divider", () => {
	it("renders without errors", () => {
		expect(wrapper.find("li").exists()).toBeTruthy();
	});
});
