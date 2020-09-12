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

describe("TextArea", () => {
  let wrapper: any;
  let textAreaNode: any;
  beforeEach(() => {
    wrapper = global.mount(<Input {...initProps} />);
    textAreaNode = wrapper.find("[data-testid='firstName']");
  });

  it("renders without errors", () => {
    expect(textAreaNode).toExist();
    expect(wrapper).toHaveStyleRule("border", "1px solid #d3d3d3", {
      modifier: `textarea`,
    });
  });

  it("adds a red border and displays an error message", () => {
    wrapper.setProps({ errors: "Required!" });

    expect(wrapper).toHaveStyleRule("border", "1px solid #d03916", {
      modifier: `textarea`,
    });
    expect(wrapper.find("[data-testid='errors']")).toHaveText("Required!");
  });

  it("calls onChange when the input is updated", () => {
    textAreaNode.simulate("change", { target: { value: "called" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
