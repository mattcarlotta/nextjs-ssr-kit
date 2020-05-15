import UserForm from "../index";

const resetMessage = jest.fn();
const resetForm = jest.fn();
const cancelForm = jest.fn();
const submitAction = jest.fn();

const initialProps = {
  _id: "",
  resetMessage,
  serverError: "",
  serverMessage: "",
  resetForm,
  cancelForm,
  submitAction,
};

const nextProps = {
  ...initialProps,
  serverMessage: "message",
};

describe("UserForm", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<UserForm {...initialProps} />);
  });

  afterEach(() => {
    resetMessage.mockClear();
    resetForm.mockClear();
    cancelForm.mockClear();
    submitAction.mockClear();
  });

  it("renders without error ", () => {
    expect(wrapper.queryByTestId("user-form")).toBeInTheDocument();
    // expect(wrapper.exists()).toBeTruthy()
  });

  it("calls the handleChange which updates a field", () => {
    const value = "updated!";
    const name = "userName";
    const inputNode = () => wrapper.queryByTestId(name);
    // inputNode = () => wrapper.find([data-testid=name])

    fireEvent.change(inputNode(), { target: { name, value } });
    expect(inputNode().value).toEqual(value);
    // expect(inputNode().props().value).toEqual(value)
  });

  it("calls resetForm when the serverMessage", () => {
    wrapper.setProps(nextProps);
    expect(resetForm).toHaveBeenCalledTimes(1);
  });

  it("when a user submits an empty form, the form displays errors", () => {
    fireEvent.click(wrapper.queryByTestId("submit"));
    // wrapper.find("[data-testid=submit]").simulate("click")
    expect(wrapper.getAllByText(/Required/)).toHaveLength(9);
    // expect(wrapper.find("[data-testid=errors]).length).toEqual(9)
    // expect(wrapper.find("[data-testid=errors]")).toHaveLength(9)
  });

  describe("with form data", () => {
    beforeEach(() => {
      [
        "userName",
        "email",
        "firstName",
        "lastName",
        "street",
        "suite",
        "city",
        "state",
        "zipCode",
        "backgroundInfo",
      ].forEach(name => {
        fireEvent.change(wrapper.queryByTestId(name), {
          // wrapper.find(`[data-testid="${name}"]`)
          target: { name, value: "email@123.com" },
        });
      });
    });
    it("when the form is submitted, it calls submitAction with form values and an id when there is no errors", () => {
      const value = "email@123.com";
      const id = "";
      const submitButton = wrapper.queryByTestId("submit");
      // const submitButton = wrapper.find([data-testid=submit])
      fireEvent.click(submitButton);
      // submitButton.simulate("click")
      expect(submitAction).toHaveBeenCalledWith({
        props: {
          address: {
            street: value,
            suite: value,
            city: value,
            state: value,
            zipCode: value,
          },
          userName: value,
          email: value,
          firstName: value,
          lastName: value,
          backgroundInfo: value,
        },
        id,
      });
    });

    // wrapper.find("form").submit()

    it("when the form is submitted but a server error is thrown, then the form will not be submitting", () => {
      const submitButton = () => wrapper.queryByTestId("submit");
      // const submitButton = () =>  wrapper.find([data-testid=submit])
      fireEvent.click(submitButton());
      // submitButton.simulate("click")
      expect(submitButton().disabled).toBeTruthy();
      // expect(inputNode().props().disabled).toBeTruthy()
      wrapper.setProps({ ...initialProps, serverError: "server" });
      expect(submitButton.disabled).toBeFalsy();
      // expect(inputNode().props().disabled).toBeFalsy()
    });
  });
});
