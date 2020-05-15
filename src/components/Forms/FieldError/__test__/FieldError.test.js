import FieldError from "../index";

const initialProps = {
  errors: "",
};

const nextProps = {
  errors: "Required!",
};

describe("Field Error", () => {
  let wrapper;
  let errorNode;
  beforeEach(() => {
    wrapper = mount(<FieldError {...initialProps} />);
    errorNode = () => wrapper.find("[data-testid=errors]");
  });

  it("initially renders without errors", () => {
    // expect(errorNode().exists()).toBeFalsy();
    expect(errorNode()).not.toBeInTheDocument();
  });

  it("renders an error", () => {
    wrapper.setProps(nextProps);

    expect(errorNode()).toBeTruthy();
    // expect(errorNode().exists()).toBeTruthy();
    expect(errorNode()).toHaveTextContent(nextProps.errors);
    // expect(errorNode().text()).toEqual(nextProps.errors);
  });
});
