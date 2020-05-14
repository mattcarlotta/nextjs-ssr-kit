import Flex from "../index";

describe("Flex", () => {
  let setup;
  let wrapper;
  let component;
  beforeEach(() => {
    setup = (props = {}) => <Flex data-testid="flex" {...props} />;
    wrapper = render(setup());
    component = wrapper.getByTestId("flex");
  });

  it("renders without errors", () => {
    expect(component).toBeInTheDocument();
    expect(component).toHaveStyle("flex-direction: row");
    expect(component).toHaveStyle("flex-wrap: nowrap");
    expect(component).toHaveStyle("justify-content: start");
  });

  it("sets 'flex-direction' to a 'column' was passed a 'direction' prop", () => {
    wrapper.rerender(setup({ direction: "column" }));
    expect(component).toHaveStyle("flex-direction: column");
  });

  it("sets 'flex-wrap' as a 'wrap' when passed a 'wrap' prop", () => {
    wrapper.rerender(setup({ wrap: "true" }));
    expect(component).toHaveStyle("flex-wrap: wrap");
  });

  it("sets 'justify-content' as a 'center' when passed a 'justify' prop", () => {
    wrapper.rerender(setup({ justify: "center" }));
    expect(component).toHaveStyle("justify-content: center");
  });
});
