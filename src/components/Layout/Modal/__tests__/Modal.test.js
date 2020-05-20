import Modal from "../index";

const onClick = jest.fn();

const initialProps = {
  children: <p data-testid="modal-details">Test</p>,
  maxWidth: "",
  onClick: undefined,
  title: "Test Title",
};

describe("Modal", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(<Modal {...initialProps} />);
  });

  it("initially adds an 'overflow:hidden' style to the body", () => {
    expect(document.body).toHaveStyle("overflow: hidden");
    // expect(wrapper.find("body")).toHaveStyleRule("overflow", "hidden");
  });

  it("removes 'overflow:hidden' style from the body on unmount", () => {
    wrapper.unmount();
    expect(document.body).not.toHaveStyle("overflow: hidden");
    // expect(wrapper.find("body")).not.toHaveStyleRule("overflow", "hidden");
  });

  it("renders without errors", () => {
    expect(wrapper.queryByTestId("modal-overlay")).toBeInTheDocument();
    // expect(wrapper.find("[data-testid=modal-overlay]").exists()).toBeTruthy();
  });

  it("renders the title", () => {
    expect(wrapper.queryByTestId("modal-title")).toHaveTextContent(
      initialProps.title,
    );
    // expect(wrapper.find("[data-testid=modal-title]").text()).toEqual(initialProps.title);
  });

  it("closes the modal when the close button is clicked", () => {
    wrapper.setProps({ onClick });
    fireEvent.click(wrapper.queryByTestId("close-modal"));
    // wrapper.find("[data-testid=close-modal]").simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders wrapped children nodes", () => {
    expect(wrapper.queryByTestId("modal-details")).toBeInTheDocument();
    // expect(wrapper.find("[data-testid=modal-details]").exists()).toBeTruthy();
  });

  it("initially sets the max-width to 600px", () => {
    expect(wrapper.queryByTestId("modal-container")).toHaveStyleRule(
      "max-width",
      "600px",
    );
    // expect(wrapper.find("[data-testid=modal-container]")).toHaveStyleRule(
    //   "max-width",
    //   "600px",
    // );
  });

  it("initially sets the max-width to 'this.props.maxWidth'", () => {
    wrapper.setProps({ maxWidth: "700px" });

    expect(wrapper.queryByTestId("modal-container")).toHaveStyleRule(
      "max-width",
      "700px",
    );
    // expect(wrapper.find("[data-testid=modal-container]")).toHaveStyleRule(
    //   "max-width",
    //   "700px",
    // );
  });
});
