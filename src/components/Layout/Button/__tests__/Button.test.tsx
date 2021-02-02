import { mount, ReactWrapper } from "enzyme";
import Button from "../index";

const initProps = {
  children: "Test"
};

describe("Styled Button", () => {
  let wrapper: ReactWrapper;
  let buttonNode: () => ReactWrapper;
  beforeEach(() => {
    wrapper = mount(
      <Button type="button" dataTestId="test-button" {...initProps} />
    );
    buttonNode = () => wrapper.find("[data-testid='test-button']");
  });

  it("renders without errors", () => {
    expect(buttonNode()).toExist();
  });

  it("initially displays a default button", () => {
    const StyledButton = buttonNode();

    expect(StyledButton).toHaveStyleRule("color", "#ccc");
    expect(StyledButton).toHaveStyleRule("background", "#000");
    expect(StyledButton).toHaveStyleRule("border", "1px solid transparent");
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 2px 7px 0 rgba(130, 130, 130, 0.39)"
    );
    expect(StyledButton).toHaveStyleRule("background", "#000", {
      target: ":hover"
    });
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 4px 14px 0 rgba(140, 140, 140, 0.39)",
      {
        target: ":hover"
      }
    );
  });

  it("displays a primary button when passed a 'primary' prop", () => {
    wrapper.setProps({ primary: true });

    const StyledButton = buttonNode();

    expect(StyledButton).toHaveStyleRule("color", "#fff");
    expect(StyledButton).toHaveStyleRule("background", "#0076ff");
    expect(StyledButton).toHaveStyleRule("border", "1px solid #0076ff");
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 2px 7px 0 rgba(3, 77, 243, 0.39)"
    );
    expect(StyledButton).toHaveStyleRule("background", "#006ae6", {
      target: ":hover"
    });
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 4px 14px 0 rgba(3, 77, 243, 0.39)",
      {
        target: ":hover"
      }
    );
  });

  it("displays a danger button when passed a 'danger' prop", () => {
    wrapper.setProps({ danger: true });

    const StyledButton = buttonNode();

    expect(StyledButton).toHaveStyleRule("color", "#fff");
    expect(StyledButton).toHaveStyleRule("background", "#e60f00");
    expect(StyledButton).toHaveStyleRule("border", "1px solid #e60f00");
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 2px 7px 0 rgba(239, 52, 52, 0.39)"
    );
    expect(StyledButton).toHaveStyleRule("background", "#d71002", {
      target: ":hover"
    });
    expect(StyledButton).toHaveStyleRule(
      "box-shadow",
      "0 4px 14px 0 rgba(239, 52, 52, 0.39)",
      {
        target: ":hover"
      }
    );
  });
});
