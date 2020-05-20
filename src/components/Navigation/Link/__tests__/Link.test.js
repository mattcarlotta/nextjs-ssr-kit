import Link from "../index";

const initProps = {
  children: "Test",
  style: {},
  href: "/test",
};

const wrapper = mount(<Link {...initProps} />);

describe("Styled Link", () => {
  it("renders without errors", () => {
    expect(wrapper.queryByTestId("link")).toBeInTheDocument();
    // expect(StyledLink.exists()).toBeTruthy();
  });
});
