context("Staff Send Mail Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/mail/create");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the create mail form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall mail page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/mail/viewall?page=1");
	});

	it("displays form errors ", () => {
		cy.get("button.preview").click();
		cy.get("[data-test=submit-button]").click();

		cy.get("[data-test=errors]").should("have.length", 3);
	});

	it("preview and submits sends an email", () => {
		cy.get("li.ant-transfer-list-content-item").first().click();
		cy.get(".ant-transfer-operation").find("button").first().click();

		cy.get("input[name=subject]").type("Hello");

		cy.get("[data-placeholder='Type a message...']").type("Test email.");

		cy.get("button.preview").click();

		cy.get("[data-test=email-subject]").should("have.text", "Hello");

		cy.get("[data-test=sendto-address]").contains("Matthew Carlotta");

		cy.get("[data-test=email-message]").should("have.text", "Test email.");

		cy.get("[data-test=submit-button]").click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "An email has been created and will be sent shortly!");

		cy.url().should("contain", "/employee/mail/viewall?page=1");

		cy.get(".ant-pagination-total-text").contains("7 items");
	});
});
