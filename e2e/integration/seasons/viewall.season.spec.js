context("Staff View Seasons Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/seasons/viewall?page=1");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the season table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("deletes a season", () => {
		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the season.");
	});

	it("deletes multiple seasons", () => {
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
			.and("have.text", "Successfully deleted the seasons.");
	});

	it("navigates to a New Season page", () => {
		cy.get("[data-test=nav-create-season]").click();
		cy.url().should("contain", "/employee/seasons/create");
		cy.get("form").should("have.length", 1);
	});

	it("navigates to an Edit Season page", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/seasons/edit");

		cy.get("form").should("have.length", 1);
	});
});
