context("Staff View Authorizations Page", () => {
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
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the authorizations table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("filters the authorization table", () => {
		cy.get(".ant-pagination-total-text").contains("14 items");

		cy.get("button#role").click();
		cy.get(".ant-select").click();
		cy.get("li[role=option]").first().click();

		cy.get(".ant-pagination-total-text").contains("1 items");

		cy.get("button#clear-filters").click();
		cy.get(".ant-pagination-total-text").contains("14 items");
	});

	it("resends authorization emails", () => {
		cy.get("[data-test=table-actions]").eq(6).click({ force: true });

		cy.get("[data-test=send-mail]").click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"An authorization key will be resent to member888@example.com shortly.",
			);
	});

	it("deletes an authorization", () => {
		cy.get("[data-test=table-actions]").last().click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the authorization key.");
	});

	it("deletes multiple authorizations", () => {
		cy.get("input[type=checkbox]").then(e => {
			const elements = e.map((_, el) => Cypress.$(el));

			cy.wrap(elements[4]).click();
			cy.wrap(elements[5]).click();
		});

		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-many-items]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the authorization keys.");
	});

	it("navigates to a Create Member page", () => {
		cy.get(".add-member").click();
		cy.url().should("contain", "/employee/members/create");
		cy.get("form").should("have.length", 1);
	});

	it("navigates to an Edit Authorization page", () => {
		cy.get("[data-test=table-actions]").eq(5).click({ force: true });

		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/members/authorizations/edit");

		cy.get("form").should("have.length", 1);
	});
});
