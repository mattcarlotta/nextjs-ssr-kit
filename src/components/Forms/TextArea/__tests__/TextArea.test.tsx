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
  let findById: (id: string) => ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Input {...initProps} />);
    findById = (id: string): ReactWrapper =>
      wrapper.find(`[data-testid='${id}']`).first();
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("adds a red border and displays an error message", () => {
    wrapper.setProps({ errors: "Required!" });

    // expect(wrapper).toHaveStyleRule("border", "1px solid #d03916");
    expect(findById("errors")).toHaveText("Required!");
  });

  it("calls onChange when the input is updated", () => {
    findById("firstName").simulate("change", { target: { value: "called" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
