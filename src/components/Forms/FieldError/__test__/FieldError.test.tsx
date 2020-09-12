import FieldError from "../index";

const initialProps = {
  errors: "",
};

describe("Field Error", () => {
  let wrapper: any;
  let errorNode: any;
  beforeEach(() => {
    wrapper = global.mount(<FieldError {...initialProps} />);
    errorNode = () => wrapper.find("[data-testid='errors']");
  });

  it("initially renders without errors", () => {
    expect(errorNode()).not.toExist();
  });

  it("renders an error", () => {
    wrapper.setProps({ errors: "Required!" });

    expect(errorNode()).toBeTruthy();
    expect(errorNode()).toHaveText("Required!");
  });
});
