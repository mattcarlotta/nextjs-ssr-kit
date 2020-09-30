import { mount } from "enzyme";
import ErrorMessage from "../index";

const wrapper = mount(<ErrorMessage />);

describe("ErrorMessage", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
