/* eslint-disable no-console */
import fieldUpdater from "../index";

const fields = [
	{
		name: "email",
		type: "text",
		label: "Email",
		icon: "mail",
		value: "",
		errors: "",
	},
	{
		name: "password",
		type: "password",
		label: "Password",
		icon: "lock",
		value: "",
		errors: "",
	},
];

describe("Field Updater Helper", () => {
	it("throws an error if missing required parameters", () => {
		console.error = jest.fn();

		const nextFields = fieldUpdater();

		expect(console.error).toHaveBeenCalledTimes(1);
		expect(nextFields).toEqual(
			"Error: You must supply a field array and name of field to update!",
		);
	});

	it("updates a field", () => {
		const updatedEmail = "test@example.com";
		const updatedFields = fieldUpdater(fields, "email", updatedEmail);
		expect(updatedFields).toEqual(
			expect.arrayContaining([
				expect.objectContaining({
					value: updatedEmail,
				}),
			]),
		);
	});
});
/* eslint-enable no-console */
