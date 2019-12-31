import SeedIcon from "../index";

const wrapper = shallow(<SeedIcon />);

describe("Seed Icon", () => {
	it("renders without errors", () => {
		expect(wrapper.find("FaFileAlt").exists()).toBeTruthy();
	});
});
