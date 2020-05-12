context("Staff Edit Authorization Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/members/authorizations/viewall?page=1");
		cy.get("[data-test=table-actions]").eq(3).click({ force: true });
		cy.get("[data-test=edit-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Edit Authorization form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall forms page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should(
			"contain",
			"/employee/members/authorizations/viewall?page=1",
		);
	});

	it("prevents duplicate authorized emails", () => {
		cy.get("input[name=authorizedEmail]")
			.clear()
			.type("carlotta.matt2@gmail.com");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"That email is already associated with another authorization key. Please delete the old authorization key or use a different email.",
			);
	});

	it("updates an authorized email", () => {
		cy.get("input[name=authorizedEmail]")
			.clear()
			.type("carlotta.matthew@gmail.com");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Successfully updated and sent a new authorization key to carlotta.matthew@gmail.com.",
			);

		cy.url().should(
			"contain",
			"/employee/members/authorizations/viewall?page=1",
		);
	});
});
