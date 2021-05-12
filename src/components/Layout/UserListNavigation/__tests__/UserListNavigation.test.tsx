import { mount } from "enzyme";
import UserListNavigation from "../index";

const openModal = jest.fn();
const seedDB = jest.fn();

const initProps = {
  className: "",
  openModal,
  seedDB
};

const wrapper = mount(<UserListNavigation {...initProps} />);

describe("UserListNavigation", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
