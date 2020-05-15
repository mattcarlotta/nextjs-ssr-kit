import HomeIcon from "../index";

const wrapper = mount(<HomeIcon />);

describe("HomeIcon", () => {
  it("renders without errors", () => {
    expect(wrapper.queryByTestId("home-icon")).toBeInTheDocument();
    // expect(wrapper.find("[data-testid=home-icon]").exists()).toBeTruthy();
  });
});
