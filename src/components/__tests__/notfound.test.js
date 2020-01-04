import NotFound from "~pages/_error";

const wrapper = shallow(<NotFound />);

describe("Not Found Page", () => {
	it("renders without errors", () => {
		expect(wrapper.find("#notfound").exists()).toBeTruthy();
	});
});
