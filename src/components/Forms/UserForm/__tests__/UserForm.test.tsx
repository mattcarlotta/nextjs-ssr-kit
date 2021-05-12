import { mount, ReactWrapper } from "enzyme";
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
  submitAction
};

describe("UserForm", () => {
  let wrapper: ReactWrapper;
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
    expect(wrapper.find("form")).toExist();
  });

  it("calls the handleChange which updates a field", () => {
    const value = "updated!";
    const name = "userName";
    const inputNode = () => wrapper.find("[data-testid='userName']").first();

    inputNode().simulate("change", { target: { name, value } });

    expect(inputNode()).toHaveProp("value", value);
  });

  // it("calls resetMessage when the form is unmounted", () => {
  //   wrapper.unmount();
  //   expect(resetMessage).toHaveBeenCalledTimes(1);
  // });

  it("when a user submits an empty form, the form displays errors", () => {
    wrapper.find("form").simulate("submit");

    expect(wrapper.find("[data-testid='errors']")).toHaveLength(9);
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
        "backgroundInfo"
      ].forEach(name => {
        wrapper
          .find(`[data-testid="${name}"]`)
          .first()
          .simulate("change", {
            target: { name, value: "email@123.com" }
          });
      });
    });

    it("when the form is submitted, it calls submitAction with form values and an id when there is no errors", () => {
      const value = "email@123.com";
      const _id = "";
      wrapper.find("form").simulate("submit");
      expect(submitAction).toHaveBeenCalledWith({
        _id,
        address: {
          street: value,
          suite: value,
          city: value,
          state: value,
          zipCode: value
        },
        userName: value,
        email: value,
        firstName: value,
        lastName: value,
        backgroundInfo: value
      });
    });

    it("calls resetForm when the serverMessage", () => {
      wrapper.find("form").simulate("submit");
      wrapper.setProps({ serverMessage: "message" });

      expect(resetForm).toHaveBeenCalledTimes(1);
    });

    it("when the form is submitted but a server error is thrown, then the form will not be submitting", () => {
      const submitButton = () => wrapper.find("[data-testid='submit']");
      wrapper.find("form").simulate("submit");

      expect(submitButton()).toHaveProp("disabled", true);

      wrapper.setProps({ serverError: "server" });
      wrapper.update();
      expect(submitButton()).toHaveProp("disabled", false);
    });
  });
});
