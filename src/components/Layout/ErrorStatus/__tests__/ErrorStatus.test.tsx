import { mount } from "enzyme";
import ErrorStatus from "../index";

const wrapper = mount(<ErrorStatus />);

describe("ErrorStatus", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
