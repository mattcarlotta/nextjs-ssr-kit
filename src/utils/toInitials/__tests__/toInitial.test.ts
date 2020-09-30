import toInitials from "../index";

describe("toInitials", () => {
  it("outputs captilized initials", () => {
    expect(toInitials("bob smith")).toEqual("BS");
  });
});
