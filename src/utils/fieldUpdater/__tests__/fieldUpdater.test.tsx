import FieldUpdater from "../index";

const fields = [
  {
    name: "zipCode",
    type: "text",
    label: "Zip Code",
    value: "",
    errors: "",
    style: { width: "20%" },
    required: true
  },
  {
    name: "backgroundInfo",
    type: "textarea",
    label: "Background Infomation",
    value: "",
    errors: "",
    style: { width: "100%" },
    required: true
  }
];

describe("FieldUpdater", () => {
  it("it to update a field with a new value", () => {
    const returnedValues = FieldUpdater(fields, "zipCode", "1");
    expect(returnedValues).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          name: "zipCode",
          type: expect.any(String),
          label: expect.any(String),
          value: "1",
          errors: expect.any(String),
          style: expect.any(Object),
          required: expect.any(Boolean)
        })
      ])
    );
  });
  it("displays an error if fields are empty", () => {
    try {
      expect(FieldUpdater([], "zipCode", "1"));
    } catch (e) {
      expect(e.toString()).toEqual(
        "Error: You must supply a field array with a name of the field to update!"
      );
    }
  });
});
