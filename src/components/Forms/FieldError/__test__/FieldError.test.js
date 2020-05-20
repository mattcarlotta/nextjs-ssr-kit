import FieldError from "../index";

const initialProps = {
  errors: "",
};

describe("Field Error", () => {
  let wrapper;
  let errorNode;
  beforeEach(() => {
    wrapper = mount(<FieldError {...initialProps} />);
    errorNode = () => wrapper.queryByTestId("errors");
    // errorNode = () => wrapper.find("[data-testid=errors]");
  });

  it("initially renders without errors", () => {
    // expect(errorNode().exists()).toBeFalsy();
    expect(errorNode()).not.toBeInTheDocument();
  });

  it("renders an error", () => {
    wrapper.setProps({ errors: "Required!" });

    expect(errorNode()).toBeTruthy();
    // expect(errorNode().exists()).toBeTruthy();
    expect(errorNode()).toHaveTextContent("Required!");
    // expect(errorNode().text()).toEqual("Required!");
  });
});
