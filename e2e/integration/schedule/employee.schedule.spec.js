context("Employee Schedule Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "carlotta.matthew@gmail.com",
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
		cy.get(".ant-select").should("have.length", 3);
	});

	it("displays current user scheduled games", () => {
		cy.get(".ant-select").first().click();

		cy.get(".ant-select-dropdown-menu-item").eq(1).click();

		cy.get("[data-test=upcoming-event").should("have.length", 0);
	});

	it("displays current month games", () => {
		cy.get(".ant-select").eq(1).click();

		cy.get("body").type("{downarrow}").type("{enter}");

		cy.get("[data-test=upcoming-event").should("have.length", 3);
	});

	it("displays current year games", () => {
		cy.get(".ant-select").eq(2).click();

		cy.get("body").type("{downarrow}").type("{enter}");

		cy.get("[data-test=upcoming-event").should("have.length", 0);
	});
});
