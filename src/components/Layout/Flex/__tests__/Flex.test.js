import Flex from "../index";

describe("Flex", () => {
  let wrapper;
  let flexNode;
  beforeEach(() => {
    wrapper = mount(<Flex data-testid="flex" />);
    flexNode = () => wrapper.queryByTestId("flex");
    // flexNode() = wrapper.find("[data-testid=flex]");
  });

  it("renders without errors", () => {
    expect(flexNode()).toBeInTheDocument();
    expect(flexNode()).toHaveStyleRule("flex-direction", "row");
    expect(flexNode()).toHaveStyleRule("flex-wrap", "nowrap");
    expect(flexNode()).toHaveStyleRule("justify-content", "start");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(flexNode()).toHaveStyleRule("flex-direction", "column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    wrapper.setProps({ wrap: "true" });
    expect(flexNode()).toHaveStyleRule("flex-wrap", "wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    wrapper.setProps({ justify: "center" });
    expect(flexNode()).toHaveStyleRule("justify-content", "center");
  });
});
