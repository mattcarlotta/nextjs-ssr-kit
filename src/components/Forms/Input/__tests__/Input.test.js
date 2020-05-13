import Input from "../index";

const onChange = jest.fn();

const initProps = {
  errors: "",
  name: "firstName",
  placeholder: "Enter text...",
  label: "First Name",
  onChange,
  type: "text",
  value: "",
};

const nextProps = {
  ...initProps,
  errors: "Required!",
};

describe("Input", () => {
  let wrapper;
  let inputNode;
  beforeEach(() => {
    wrapper = render(<Input {...initProps} />);
    inputNode = wrapper.getByTestId("firstName");
  });

  it("renders without errors", () => {
    expect(inputNode).toBeTruthy();
    expect(inputNode).toHaveStyle("border: 1px solid #d3d3d3");
  });

  it("adds a red border and displays an error message", () => {
    wrapper.rerender(<Input {...nextProps} />);

    expect(inputNode).toHaveStyle("border: 1px solid #d03916");
    expect(wrapper.getByTestId("errors")).toHaveTextContent("Required!");
  });

  it("calls onChange when the input is updated", () => {
    const value = "Bob";
    fireEvent.change(inputNode, {
      target: { value },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
