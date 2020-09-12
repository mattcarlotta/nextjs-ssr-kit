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
  let wrapper: any;
  let inputNode: any;
  beforeEach(() => {
    wrapper = global.mount(<Input {...initialProps} />);
    inputNode = wrapper.find("[data-testid='input']");
  });

  afterEach(() => {
    onChange.mockClear();
  });

  it("renders without errors", () => {
    expect(inputNode).toExist();
  });

  it("renders an error", () => {
    wrapper.setProps({ errors: "Required" });
    const errorsNode = wrapper.find("[data-testid='errors']");
    expect(errorsNode).toExist();
    expect(errorsNode).toHaveText("Required");
  });

  it("calls onChange when the input is updated", () => {
    inputNode.simulate("change", { target: { value: "called" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
