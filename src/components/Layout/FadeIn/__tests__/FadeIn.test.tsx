import { mount, ReactWrapper } from "enzyme";
import FadeIn from "../index";

describe("FadeIn", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<FadeIn />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("sets a the animation timing", () => {
    wrapper.setProps({ timing: "2s" });

    expect(wrapper).toHaveStyleRule(
      "animation",
      "fade-in 2s 0s ease-in-out forwards"
    );
  });
});
