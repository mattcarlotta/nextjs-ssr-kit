import NoData from "../index";

const wrapper = shallow(<NoData />);

describe("NoData", () => {
	it("renders without errors", () => {
		expect(wrapper.find("h1.noDataMessage").exists()).toBeTruthy();
	});
});
