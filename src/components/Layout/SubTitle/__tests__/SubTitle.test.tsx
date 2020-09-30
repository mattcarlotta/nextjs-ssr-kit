import { mount } from "enzyme";
import SubTitle from "../index";

const wrapper = mount(<SubTitle />);

describe("SubTitle", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
