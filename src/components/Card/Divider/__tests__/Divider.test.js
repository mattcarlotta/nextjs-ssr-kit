import Divider from "../index";

const wrapper = mount(<Divider />);

describe("Divider", () => {
	it("renders without errors", () => {
		expect(wrapper.find("li").exists()).toBeTruthy();
	});
});
