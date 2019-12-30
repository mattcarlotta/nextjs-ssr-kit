import NotFound from "../index";

const wrapper = shallow(<NotFound />);

describe("Not Found Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("#notfound-container").exists()).toBeTruthy();
	});
});
