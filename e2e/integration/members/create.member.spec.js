context("Staff Create Member Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/members/create");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Create Member form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall members page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/members/viewall?page=1");
	});

	it("displays errors if empty fields are submitted", () => {
		cy.get("form").submit();

		cy.get("[data-test=errors]").should("have.length", 2);
	});

	it("prevents duplicate authorized emails", () => {
		cy.get(".clickhandler").first().click();

		cy.get("[data-value=employee]").click();

		cy.get("input[name=authorizedEmail]").type("carlotta.matt2@gmail.com");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"That email is already associated with another authorization key. Please delete the old authorization key or use a different email.",
			);
	});

	it("creates an authorized email", () => {
		cy.get(".clickhandler").first().click();

		cy.get("[data-value=employee]").click();

		cy.get("input[name=authorizedEmail]").type("carlotta.matthew@gmail.com");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Successfully created and sent an authorization key to carlotta.matthew@gmail.com.",
			);

		cy.url().should(
			"contain",
			"/employee/members/authorizations/viewall?page=1",
		);
	});
});
