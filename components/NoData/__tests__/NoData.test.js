import NoData from "../index";

const wrapper = mount(<NoData />);

describe("NoData", () => {
	it("renders without errors", () => {
		expect(wrapper.find("h1").exists()).toBeTruthy();
	});
});
