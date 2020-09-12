import Link from "../index";

const initProps = {
  children: "Test",
  style: {},
  href: "/test",
};

const wrapper = global.mount(<Link {...initProps} />);

describe("Styled Link", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='link']")).toExist();
  });
});
