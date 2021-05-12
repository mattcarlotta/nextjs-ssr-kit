import { mount, ReactWrapper } from "enzyme";
import Input from "../index";

const onChange = jest.fn();

const initialProps = {
  errors: "",
  name: "input",
  placeholder: "Test Placeholder",
  label: "Test",
  onChange,
  type: "text",
  value: ""
};

describe("Input", () => {
  let wrapper: ReactWrapper;
  let findById: (id: string) => ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Input {...initialProps} />);
    findById = (id: string): ReactWrapper =>
      wrapper.find(`[data-testid='${id}']`).first();
  });

  afterEach(() => {
    onChange.mockClear();
  });

  it("renders without errors", () => {
    expect(wrapper).toExist();
  });

  it("renders an error", () => {
    wrapper.setProps({ errors: "Required" });
    const errorsNode = findById("errors");
    expect(errorsNode).toExist();
    expect(errorsNode).toHaveText("Required");
  });

  it("calls onChange when the input is updated", () => {
    findById("input").simulate("change", { target: { value: "called" } });
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
