import { mount } from "enzyme";
import GlobalStylesheet from "../globalStylesheet";

const wrapper = mount(<GlobalStylesheet />);

describe("Global Stylesheet", () => {
  it("renders without errors", () => {
    expect(wrapper).toExist();
  });
});
