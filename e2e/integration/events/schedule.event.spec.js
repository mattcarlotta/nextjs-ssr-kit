context("Staff Schedule Event Page", () => {
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
		cy.get("[data-test=table-actions]").eq(7).click({ force: true });
		cy.get("[data-test=assign-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Schedule Event form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall events page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/events/viewall?page=1");
	});

	it("schedules an event", () => {
		cy.get("[data-test=go-back]").click();
		cy.url().should("contain", "/employee/events/viewall?page=1");
		cy.get(".ant-table-row").eq(7).find("td").eq(10).contains("0");

		cy.get("[data-test=table-actions]").eq(7).click({ force: true });
		cy.get("[data-test=assign-location]").click();

		cy.get("[data-test='Member Member']")
			.focus()
			.trigger("keydown", { keyCode: 32 })
			.trigger("keydown", { keyCode: 39, force: true })
			.wait(300)
			.trigger("keydown", { keyCode: 32, force: true });

		cy.get("[data-test='Member2 Member2']")
			.focus()
			.trigger("keydown", { keyCode: 32 })
			.trigger("keydown", { keyCode: 39, force: true })
			.wait(300)
			.trigger("keydown", { keyCode: 32, force: true })
			.wait(750);

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated the event's schedule.");

		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get(".ant-table-row").eq(7).find("td").eq(10).contains("2");
	});
});
