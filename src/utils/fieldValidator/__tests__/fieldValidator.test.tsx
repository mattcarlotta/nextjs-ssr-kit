import FieldValidator from "../index";

const initialFields = [
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
    name: "email",
    type: "textarea",
    label: "Background Infomation",
    value: "",
    errors: "",
    style: { width: "100%" },
    required: true
  }
];

const invalidFields = [
  {
    name: "zipCode",
    type: "email",
    label: "Zip Code",
    value: "test",
    errors: "",
    style: { width: "20%" },
    required: true
  }
];

describe("FieldValidator", () => {
  it("checks if the field is required and has no value, and displays a Required error", () => {
    const requiredField = FieldValidator(initialFields);
    expect(requiredField).toEqual({
      validatedFields: expect.arrayContaining([
        expect.objectContaining({
          name: "zipCode",
          type: expect.any(String),
          label: expect.any(String),
          value: "",
          errors: "Required.",
          style: expect.any(Object),
          required: true
        })
      ]),
      errors: 2
    });
  });

  it("checks for an invalid email", () => {
    const invalidEmail = FieldValidator(invalidFields);
    expect(invalidEmail).toEqual({
      validatedFields: expect.arrayContaining([
        expect.objectContaining({
          name: expect.any(String),
          type: "email",
          label: expect.any(String),
          value: "test",
          errors: "Invalid email.",
          style: expect.any(Object),
          required: expect.any(Boolean)
        })
      ]),
      errors: 1
    });
  });

  it("throws an error if there are no fields", () => {
    try {
      expect(FieldValidator([]));
    } catch (e) {
      expect(e.toString()).toEqual(
        "Error: You must supply an array of fields!"
      );
    }
  });
});
