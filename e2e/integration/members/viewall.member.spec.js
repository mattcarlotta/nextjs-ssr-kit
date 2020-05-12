context("Staff View Members Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/members/viewall?page=1");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the members table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("filters the member table", () => {
		cy.get(".ant-pagination-total-text").contains("18 items");

		cy.get("button#status").click();
		cy.get(".ant-select").click();
		cy.get("li[role=option]").eq(1).click();

		cy.get(".ant-pagination-total-text").contains("3 items");

		cy.get("button#clear-filters").click();
		cy.get(".ant-pagination-total-text").contains("18 items");
	});

	it("deletes a member", () => {
		cy.get("[data-test=table-actions]").eq(1).click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the member.");
	});

	// it("deletes multiple members", () => {
	// 	cy.get("input[type=checkbox]").then(e => {
	// 		const elements = e.map((_, el) => Cypress.$(el));

	// 		cy.wrap(elements[8]).click();
	// 		cy.wrap(elements[9]).click();
	// 	});

	// 	cy.get("[data-test=table-actions]").eq(2).click({ force: true });

	// 	cy.get("[data-test=delete-many-items]").click();

	// 	cy.get(".ant-popover-buttons").find("button").eq(1).click();

	// 	cy.get("[data-test=toast-message]")
	// 		.should("have.length", 1)
	// 		.and("have.text", "Successfully deleted the members.");
	// });

	it("navigates to a Create Member page", () => {
		cy.get(".add-member").click();
		cy.url().should("contain", "/employee/members/create");
		cy.get("form").should("have.length", 1);
	});

	it("navigates to a View Member page", () => {
		cy.get("[data-test=table-actions]").eq(6).click({ force: true });
		cy.get("[data-test=view-location]").click();
		cy.url().should("contain", "/employee/members/view");
		cy.get("form").should("have.length", 1);
	});
});
