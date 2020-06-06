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
    expect(wrapper.find("ToastMessage")).toHaveProp(
      "message",
      initialProps.message,
    );
    expect(wrapper.find("ToastMessage")).toHaveProp("type", initialProps.type);
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
