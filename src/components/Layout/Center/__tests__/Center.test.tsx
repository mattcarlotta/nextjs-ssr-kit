import { mount } from "enzyme";
import Center from "../index";

const wrapper = mount(<Center />);

describe("Center", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
