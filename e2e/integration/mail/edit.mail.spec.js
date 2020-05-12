context("Staff Edit Mail Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/mail/viewall?page=1");
		cy.get("[data-test=table-actions]").last().click();
		cy.get("[data-test=edit-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Edit Mail form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall mail page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/mail/viewall?page=1");
	});

	it("updates the email", () => {
		const updatedMessage = "Updated email message.";

		cy.get("[data-placeholder='Type a message...']")
			.clear()
			.type(updatedMessage);

		cy.get("button.preview").click();

		cy.get("[data-test=email-message]").should("have.text", updatedMessage);

		cy.get("[data-test=submit-button]").click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Successfully updated the email and it will be sent shortly!",
			);

		cy.url().should("contain", "/employee/mail/viewall?page=1");
	});
});
