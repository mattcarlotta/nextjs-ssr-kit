context("Staff View Forms Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/forms/viewall?page=1");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the forms table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("filters the forms table", () => {
		cy.get(".ant-pagination-total-text").contains("11 items");

		cy.get("button#sent-emails").click();
		cy.get(".ant-select").click();
		cy.get("li[role=option]").eq(1).click();

		cy.get(".ant-pagination-total-text").contains("6 items");

		cy.get("button#clear-filters").click();
		cy.get(".ant-pagination-total-text").contains("11 items");
	});

	it("resends AP Form notifications", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=send-mail]").click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Email notifications for that form will be resent shortly.",
			);
	});

	it("deletes a form", () => {
		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the form.");
	});

	it("deletes multiple forms", () => {
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
			.and("have.text", "Successfully deleted the forms.");
	});

	it("navigates to a New Form page", () => {
		cy.get(".create-ap-form").click();
		cy.url().should("contain", "/employee/forms/create");
		cy.get("form").should("have.length", 1);
	});

	it("navigates to an Edit Form page", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/forms/edit");

		cy.get("form").should("have.length", 1);
	});
});
