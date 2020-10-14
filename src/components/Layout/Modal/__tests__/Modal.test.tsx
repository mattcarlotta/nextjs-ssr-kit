import { mount, ReactWrapper } from "enzyme";
import Modal from "../index";

const onClick = jest.fn();

const initialProps = {
  children: <p data-testid="modal-details">Test</p>,
  maxWidth: "",
  onClick,
  title: "Test Title"
};

describe("Modal", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(<Modal {...initialProps} />);
  });

  // it("initially adds an 'overflow:hidden' style to the body", () => {
  // expect(document.body).toHaveStyle("overflow: hidden");
  // });

  // it("removes 'overflow:hidden' style from the body on unmount", () => {
  //   wrapper.unmount();
  //   expect(wrapper.find("body")).not.toHaveStyle("overflow: hidden");
  // });

  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='modal-overlay']")).toExist();
  });

  it("renders the title", () => {
    expect(wrapper.find("[data-testid='modal-title']").first()).toHaveText(
      initialProps.title
    );
  });

  it("closes the modal when the close button is clicked", () => {
    wrapper.setProps({ onClick });
    wrapper.find("[data-testid='close-modal']").first().simulate("click");

    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it("renders wrapped children nodes", () => {
    expect(wrapper.find("[data-testid='modal-details']")).toExist();
  });

  it("initially sets the max-width to 600px", () => {
    expect(
      wrapper.find("[data-testid='modal-container']").first()
    ).toHaveStyleRule("max-width", "600px");
  });

  it("initially sets the max-width to 'this.props.maxWidth'", () => {
    wrapper.setProps({ maxWidth: "700px" });

    expect(
      wrapper.find("[data-testid='modal-container']").first()
    ).toHaveStyleRule("max-width", "700px");
  });
});
