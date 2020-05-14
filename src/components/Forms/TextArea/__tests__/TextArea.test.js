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

describe("TextArea", () => {
  let wrapper;
  let textAreaNode;
  beforeEach(() => {
    wrapper = render(<Input {...initProps} />);
    textAreaNode = wrapper.queryByTestId("firstName");
  });

  it("renders without errors", () => {
    expect(textAreaNode).toBeTruthy();
    expect(textAreaNode).toHaveStyle("border: 1px solid #d3d3d3");
  });

  it("adds a red border and displays an error message", () => {
    wrapper.rerender(<Input {...nextProps} />);

    expect(textAreaNode).toHaveStyle("border: 1px solid #d03916");
    expect(wrapper.getByTestId("errors")).toHaveTextContent("Required!");
  });

  it("calls onChange when the input is updated", () => {
    const value = "Bob";
    fireEvent.change(textAreaNode, {
      target: { value },
    });

    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
