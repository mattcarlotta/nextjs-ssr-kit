import Container from "../index";

const wrapper = shallow(<Container />);
describe("Container", () => {
	it("renders without errors", () => {
		expect(wrapper.find("div.grid").exists()).toBeTruthy();
	});
});
