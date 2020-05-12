context("Staff Dashboard Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/dashboard");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("only displays staff routes in the side navigation", () => {
		cy.get(".ant-menu")
			.find("[role=menuitem]")
			.should("have.length", 12)
			.and(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				expect(elements[0].text()).to.equal("dashboard");
				expect(elements[1].text()).to.equal("events");
				expect(elements[2].text()).to.equal("forms");
				expect(elements[3].text()).to.equal("mail");
				expect(elements[4].text()).to.equal("members");
				expect(elements[5].text()).to.equal("schedule");
				expect(elements[6].text()).to.equal("seasons");
				expect(elements[7].text()).to.equal("settings");
				expect(elements[8].text()).to.equal("help");
				expect(elements[9].text()).to.equal("contact us");
				expect(elements[10].text()).to.equal("privacy policy");
				expect(elements[11].text()).to.equal("licensing");
			});
	});

	it("displays an employee list of availabilites", () => {
		cy.get("[data-test=employee-avail-list]")
			.should("have.length", 1)
			.find("li")
			.first()
			.contains("Matthew Carlotta");
	});
});
