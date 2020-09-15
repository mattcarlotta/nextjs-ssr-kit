import { mount, ReactWrapper } from "enzyme";
import Flex from "../index";

describe("Flex", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Flex data-testid="flex" />);
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
    expect(wrapper).toHaveStyleRule("flex-direction", "row");
    expect(wrapper).toHaveStyleRule("flex-wrap", "nowrap");
    expect(wrapper).toHaveStyleRule("justify-content", "start");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(wrapper).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    wrapper.setProps({ flexwrap: "true" });
    expect(wrapper).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    wrapper.setProps({ justify: "center" });
    expect(wrapper).toHaveStyleRule("justify-content", "center");
  });
});
