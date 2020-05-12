context("Staff View Events Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/events/viewall?page=1");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the events table", () => {
		cy.get(".ant-table-wrapper").should("have.length", 1);
	});

	it("filters the events table", () => {
		cy.get(".ant-pagination-total-text").contains("15 items");

		cy.get("button#sent-emails").click();
		cy.get(".ant-select").click();
		cy.get("li[role=option]").eq(1).click();

		cy.get(".ant-pagination-total-text").contains("9 items");

		cy.get("button#clear-filters").click();
		cy.get(".ant-pagination-total-text").contains("15 items");
	});

	it("resends event notifications", () => {
		cy.get(".ant-table-row")
			.eq(1)
			.find("td")
			.eq(11)
			.find("[data-test=sent]")
			.should("have.length", 1);
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=send-mail]").click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Email notifications for that event will be resent within 24 hours of the event date.",
			);

		cy.get(".ant-table-row")
			.first()
			.find("td")
			.eq(11)
			.find("[data-test=unsent]")
			.should("have.length", 1);
	});

	it("deletes an event", () => {
		cy.get("[data-test=table-actions]").eq(2).click({ force: true });

		cy.get("[data-test=delete-item]").click();

		cy.get(".ant-popover-buttons").find("button").eq(1).click();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully deleted the event.");
	});

	it("deletes multiple events", () => {
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
			.and("have.text", "Successfully deleted the events.");
	});

	it("navigates to an Add Event page", () => {
		cy.get(".add-event").click();
		cy.url().should("contain", "/employee/events/create");
	});

	it("navigates to an Edit Event page", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/events/edit");
	});

	it("navigates to a Schedule Event page", () => {
		cy.get("[data-test=table-actions]").first().click({ force: true });

		cy.get("[data-test=assign-location]").click();

		cy.url().should("contain", "/employee/events/assign");
	});
});
