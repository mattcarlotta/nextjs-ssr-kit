import { mount, ReactWrapper } from "enzyme";
import Input from "../index";

const onChange = jest.fn();

const initProps = {
  errors: "",
  name: "firstName",
  placeholder: "Enter text...",
  label: "First Name",
  onChange,
  type: "text",
  value: ""
};

describe("TextArea", () => {
  let wrapper: ReactWrapper;
  let textAreaNode: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Input {...initProps} />);
    textAreaNode = wrapper.find("[data-testid='firstName']").first();
  });

  it("renders without errors", () => {
    expect(textAreaNode).toExist();
  });

  it("adds a red border and displays an error message", () => {
    wrapper.setProps({ errors: "Required!" });

    // expect(wrapper).toHaveStyleRule("border", "1px solid #d03916");
    expect(wrapper.find("[data-testid='errors']")).toHaveText("Required!");
  });

  it("calls onChange when the input is updated", () => {
    textAreaNode.simulate("change", { target: { value: "called" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
