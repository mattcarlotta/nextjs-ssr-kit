import { mount, ReactWrapper } from "enzyme";
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

describe("ShowMemberDetails", () => {
  let wrapper: ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <>
        <ToastContainer
          position="top-right"
          autoClose={7500}
          hideProgressBar={false}
          newestOnTop={false}
          draggable
          pauseOnHover
        />
        <Toast type="success" message="Hello" />
      </>,
    );
  });

  it("renders without errors", () => {
    expect(wrapper.find("ToastMessage")).toHaveProp("message", "Hello");
    expect(wrapper.find("ToastMessage")).toHaveProp("type", "success");
  });

  it("renders an success icon", () => {
    expect(displayIcon("success")).toEqual(<FaCheck style={style} />);
  });

  it("renders an info icon", () => {
    expect(displayIcon("info")).toEqual(<FaInfo />);
  });

  it("renders an error icon", () => {
    expect(displayIcon("error")).toEqual(<FaExclamationCircle />);
  });

  it("renders a warning icon", () => {
    expect(displayIcon("warning")).toEqual(
      <FaExclamationTriangle style={style} />,
    );
  });

  it("renders a bug icon if missing type", () => {
    expect(displayIcon("")).toEqual(<FaBug style={style} />);
  });
});
