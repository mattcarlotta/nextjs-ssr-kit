import { mount } from "enzyme";
import ClickHandler from "../index";

const closeModal = jest.fn();

const eventListener: any = {};
document.addEventListener = (evt: any, cb: any) => (eventListener[evt] = cb);
document.removeEventListener = jest.fn();

describe("Modal Click Handler", () => {
  let wrapper: any;
  beforeEach(() => {
    wrapper = mount(
      <div>
        <ClickHandler>
          {({ isVisible, handleMenuClick }) => (
            <div className="dropdown-container">
              <button
                type="button"
                data-testid="open-dropdown"
                onClick={handleMenuClick}
              >
                Open Modal
              </button>
              {isVisible && (
                <button
                  type="button"
                  data-testid="close-dropdown"
                  onClick={handleMenuClick}
                >
                  Close
                </button>
              )}
            </div>
          )}
        </ClickHandler>
        <div className="outside-content" />
      </div>
    );
  });

  afterEach(() => {
    closeModal.mockClear();
  });

  it("renders without errors", () => {
    expect(wrapper.find("div.dropdown-container").exists()).toBeTruthy();
  });

  it("doesn't open the dropdown if the dropdown container was clicked", () => {
    wrapper
      .find("ClickHandler")
      .instance()
      .handleClickOutside({
        target: wrapper.find("div.dropdown-container").getDOMNode()
      });

    expect(wrapper.find("[data-testid='close-dropdown']")).not.toExist();
  });

  it("opens and closes the dropdown if a click is outside of the clickhandler", () => {
    wrapper.find("[data-testid='open-dropdown']").simulate("click");

    expect(wrapper.find("[data-testid='close-dropdown']")).toExist();

    wrapper
      .find("ClickHandler")
      .instance()
      .handleClickOutside({
        target: wrapper.find("div.outside-content").getDOMNode()
      });

    wrapper.update();
    expect(wrapper.find("[data-testid='close-dropdown']")).not.toExist();
  });

  it("closes the dropdown if it's open and the window is scrolled", () => {
    wrapper.find("[data-testid='open-dropdown']").simulate("click");

    expect(wrapper.find("[data-testid='close-dropdown']")).toExist();

    wrapper.find("ClickHandler").instance().handleMenuScrollClose();

    wrapper.update();
    expect(wrapper.find("[data-testid='close-dropdown']")).not.toExist();
  });

  it("doesn't update state if the dropdown is closed and the window is scrolled", () => {
    expect(wrapper.find("ClickHandler").state("isVisible")).toBeFalsy();

    wrapper.find("ClickHandler").instance().handleMenuScrollClose();

    wrapper.update();
    expect(wrapper.find("ClickHandler").state("isVisible")).toBeFalsy();
  });

  it("removes the event listeners on unmount", () => {
    wrapper.unmount();
    expect(document.removeEventListener).toHaveBeenCalledTimes(1);
  });
});
