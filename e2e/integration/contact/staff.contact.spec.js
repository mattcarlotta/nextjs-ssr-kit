context("Staff Contact Us Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/contact-us");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the contact-us page", () => {
		cy.get(".ant-card-head-title").contains("Contact Us");
	});

	it("displays form errors if fields are empty", () => {
		cy.get("form").submit();
		cy.get("[data-test=errors]").should("have.length", 3);
	});

	it("sends an email", () => {
		cy.get(".clickhandler").first().click();

		cy.get("[data-value=Admin]").click();

		cy.get("input[name=subject]").type("Test Email");

		cy.get("textarea[name=message]").type("Hi. :)");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Thank you for contacting us. The admin has received your message. Expect a response within 24 hours.",
			);

		cy.url().should("contain", "/employee/dashboard");
	});
});
