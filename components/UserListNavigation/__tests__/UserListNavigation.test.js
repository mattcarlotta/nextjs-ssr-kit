import UserListNavigation from "../index";

const initProps = {
	openModal: jest.fn(),
	seedDB: jest.fn(),
};

const wrapper = mount(<UserListNavigation {...initProps} />);

describe("User List Navigation", () => {
	it("renders without errors", () => {
		expect(wrapper.find("div#userlist").exists()).toBeTruthy();
	});
});
