import FlexCenter from "../index";

describe("Flex", () => {
  let wrapper;
  let flexNode;
  beforeEach(() => {
    wrapper = mount(<FlexCenter data-testid="flex" />);
    flexNode = () => wrapper.queryByTestId("flex");
  });

  it("renders without errors", () => {
    expect(flexNode()).toBeInTheDocument();
    expect(flexNode()).toHaveStyle("flex-direction: row");
    expect(flexNode()).toHaveStyle("height: 50vh");
  });

  it("sets 'flex-direction' to a 'column' when passed a 'direction' prop", () => {
    wrapper.setProps({ direction: "column" });
    expect(flexNode()).toHaveStyle("flex-direction: column");
  });

  it("sets 'height' when passed a 'height' prop", () => {
    wrapper.setProps({ height: "100px" });
    expect(flexNode()).toHaveStyle("height: 100px");
  });
});
