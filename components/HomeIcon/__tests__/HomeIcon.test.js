import HomeIcon from "../index";

const wrapper = shallow(<HomeIcon />);

describe("Home Icon", () => {
	it("renders without errors", () => {
		expect(wrapper.find("FaHome").exists()).toBeTruthy();
	});
});
