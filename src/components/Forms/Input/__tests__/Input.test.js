import Input from "../index";

const onChange = jest.fn();

const initialProps = {
  errors: "",
  name: "input",
  placeholder: "Test Placeholder",
  label: "Test",
  onChange,
  type: "text",
  value: "",
};

describe("Input", () => {
  let wrapper;
  let inputNode;
  beforeEach(() => {
    wrapper = mount(<Input {...initialProps} />);
    inputNode = wrapper.queryByTestId("input");
    // inputNode = wrapper.find("[data-testid=input]")
  });

  afterEach(() => {
    onChange.mockClear();
  });

  it("renders without errors", () => {
    expect(inputNode).toBeInTheDocument();
    // expect(inputNode.exists()).toBeTruthy()
  });

  it("renders an error", () => {
    wrapper.setProps({ errors: "Required" });
    const errorsNode = wrapper.queryByTestId("errors");
    // errorsNode = wrapper.find("[data-testid=errors]"")
    expect(errorsNode).toBeInTheDocument();
    // expect(errorsNode.exists()).toBeTruthy()
    expect(errorsNode).toHaveTextContent("Required");
    // expect(errorsNode.text()).toEqual("Required")
  });

  it("calls onChange when the input is updated", () => {
    const value = "called!";
    fireEvent.change(inputNode, { target: { value } });
    // wrapper.find("[data-testid=input]").simulate("change", {target: {value}})
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
