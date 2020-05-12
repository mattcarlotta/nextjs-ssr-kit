import fieldValidator from "../index";

describe("Field Validator Helper", () => {
	it("throws an error if missing required parameters", () => {
		const nextFields = fieldValidator();
		expect(nextFields).toEqual("Error: You must supply an array of fields!");
	});

	it("passes validation when all requirements are satisfied", () => {
		const fields = [
			{
				name: "email",
				type: "text",
				value: "test@example.com",
				errors: "",
				required: true,
			},
			{
				name: "password",
				type: "password",
				value: "12345",
				errors: "",
				required: true,
			},
		];

		const { errors } = fieldValidator(fields);
		expect(errors).toBeNull();
	});

	it("validates required fields", () => {
		const fields = [
			{
				name: "email",
				type: "text",
				value: "",
				errors: "",
				required: true,
			},
			{
				name: "password",
				type: "password",
				value: "",
				errors: "",
				required: true,
			},
			{
				name: "season",
				type: "range",
				value: [],
				errors: "",
				required: true,
			},
		];

		const { validatedFields, errors } = fieldValidator(fields);
		expect(validatedFields).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					errors: "Required.",
				}),
			]),
		);
		expect(errors).toEqual(3);
	});

	it("validates valid emails", () => {
		const fields = [
			{
				name: "email",
				type: "text",
				value: "bademail.com",
				errors: "",
			},
		];

		const { validatedFields, errors } = fieldValidator(fields);
		expect(validatedFields).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					errors: "Invalid email.",
				}),
			]),
		);
		expect(errors).toEqual(1);
	});

	it("validates short passwords", () => {
		const fields = [
			{
				name: "password",
				type: "password",
				value: "1234",
				errors: "",
			},
		];

		const { validatedFields, errors } = fieldValidator(fields);
		expect(validatedFields).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					errors: "Password too short.",
				}),
			]),
		);
		expect(errors).toEqual(1);
	});

	it("validates date ranges", () => {
		const fields = [
			{
				name: "date",
				type: "range",
				value: ["1234"],
				errors: "",
			},
		];

		const { validatedFields, errors } = fieldValidator(fields);
		expect(validatedFields).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					errors: "You must select a start and an end date.",
				}),
			]),
		);
		expect(errors).toEqual(1);
	});
});
