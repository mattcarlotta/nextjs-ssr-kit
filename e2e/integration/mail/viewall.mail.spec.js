context("Staff View Mail Page", () => {
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
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the mail table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("filters the mail table", () => {
		cy.get(".ant-pagination-total-text").contains("6 items");

		cy.get("button#status").click();

		cy.get(".ant-select").click();

		cy.get("li[role=option]").eq(1).click();

		cy.get(".ant-pagination-total-text").contains("3 items");

		cy.get("button#clear-filters").click();

		cy.get(".ant-pagination-total-text").contains("6 items");
	});

	it("deletes an email", () => {
		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the email.");
	});

	it("resends an email", () => {
		cy.get(".ant-table-row")
			.eq(1)
			.find("[data-status=sent]")
			.should("have.length", 1);

		cy.get("[data-test=table-actions]").eq(1).click({ force: true });

		cy.get("[data-test=send-mail]").click();

		cy.get(".ant-table-row")
			.eq(1)
			.find("[data-status=unsent]")
			.should("have.length", 1);

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "That email will be resent shortly.");
	});

	it("deletes multiple emails", () => {
		cy.get("input[type=checkbox]").then(e => {
			const elements = e.map((_, el) => Cypress.$(el));

			cy.wrap(elements[2]).click();
			cy.wrap(elements[3]).click();
		});

		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-many-items]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the mail.");
	});

	it("navigates to a Send Mail page", () => {
		cy.get(".send-mail").click();
		cy.url().should("contain", "/employee/mail/create");
		cy.get("form").should("have.length", 1);
	});

	it("navigates to an Edit Mail page", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/mail/edit");

		cy.get("form").should("have.length", 1);
	});
});
