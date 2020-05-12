context("Staff Schedule Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/schedule");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays a calendar", () => {
		cy.get(".ant-fullcalendar-table").should("have.length", 1);

		cy.get("[data-test=upcoming-event").should("have.length", 2);
	});

	it("displays 3 select buttons", () => {
		cy.get(".ant-select").should("have.length", 3).first().click();

		cy.get(".ant-select-dropdown-menu-item")
			.should("have.length", 1)
			.and("have.text", "All Games");
	});
});
