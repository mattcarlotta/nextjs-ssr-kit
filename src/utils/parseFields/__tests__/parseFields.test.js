import ParseFields from "../index";

const initialFields = [
  {
    name: "zipCode",
    type: "text",
    label: "Zip Code",
    value: "1",
    errors: "",
    style: { width: "20%" },
    required: true,
  },
  {
    name: "city",
    type: "text",
    label: "Zip Code",
    value: "2",
    errors: "",
    style: { width: "20%" },
    required: true,
  },
  {
    name: "suite",
    type: "text",
    label: "Zip Code",
    value: "",
    errors: "",
    style: { width: "20%" },
    required: true,
  },
  {
    name: "email",
    type: "textarea",
    label: "Background Infomation",
    value: "",
    errors: "",
    style: { width: "100%" },
    required: true,
  },
];

describe("ParseFields", () => {
  it("displays an error if fields are empty", () => {
    global.console.error = jest.fn();
    const returnedValues = ParseFields([]);
    expect(returnedValues).toEqual([]);
    expect(global.console.error).toHaveBeenCalledWith(
      "Error: You must supply an array of fields!",
    );
    global.console.error = global.console.error.mockRestore();
  });

  it("has a name of zipCode then it creates an address object", () => {
    const formValues = ParseFields(initialFields);
    expect(formValues).toEqual(
      expect.objectContaining({
        address: expect.objectContaining({
          zipCode: "1",
          city: "2",
        }),
      }),
    );
  });
});
