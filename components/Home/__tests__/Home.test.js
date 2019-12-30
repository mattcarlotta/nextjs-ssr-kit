import Home from "../index";

const wrapper = shallow(<Home />);

describe("Not Found Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("#home").exists()).toBeTruthy();
	});
});
