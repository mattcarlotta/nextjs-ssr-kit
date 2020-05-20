import {
  FaInfo,
  FaCheck,
  FaExclamationTriangle,
  FaBug,
  FaExclamationCircle,
} from "react-icons/fa";
import { ToastContainer } from "react-toastify";
import Toast, { displayIcon } from "../index";

const style = {
  marginTop: 9,
};

const initialProps = {
  message: "Hello",
  type: "success",
};

describe("ShowMemberDetails", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = mount(
      <>
        <ToastContainer
          position="top-right"
          autoClose={7500}
          hideProgressBar={false}
          newestOnTop={false}
          pauseOnVisibilityChange
          draggable
          pauseOnHover
        />
        <Toast {...initialProps} />
      </>,
    );
  });

  it("renders without errors", () => {
    expect(
      wrapper.container.firstChild.classList.contains("Toastify"),
    ).toBeTruthy();
    // expect(wrapper.find("ToastMessage").props().message).toEqual(initialProps.message);
    // expect(wrapper.find("ToastMessage").props().type).toEqual(initialProps.type);
  });

  it("renders an success icon", () => {
    const icon = displayIcon("success");
    expect(icon).toEqual(<FaCheck style={style} />);
  });

  it("renders an info icon", () => {
    const icon = displayIcon("info");
    expect(icon).toEqual(<FaInfo />);
  });

  it("renders an error icon", () => {
    const icon = displayIcon("error");
    expect(icon).toEqual(<FaExclamationCircle />);
  });

  it("renders a warning icon", () => {
    const icon = displayIcon("warning");
    expect(icon).toEqual(<FaExclamationTriangle style={style} />);
  });

  it("renders a bug icon if missing type", () => {
    const icon = displayIcon("");
    expect(icon).toEqual(<FaBug style={style} />);
  });
});
