import HomeIcon from "../index";

const wrapper = global.mount(<HomeIcon />);

describe("HomeIcon", () => {
  it("renders without errors", () => {
    expect(wrapper.find("[data-testid='home-icon']")).toExist();
  });
});
