import CreateIcon from "../index";

const wrapper = shallow(<CreateIcon />);

describe("Create Icon", () => {
	it("renders without errors", () => {
		expect(wrapper.find("FaUserPlus").exists()).toBeTruthy();
	});
});
