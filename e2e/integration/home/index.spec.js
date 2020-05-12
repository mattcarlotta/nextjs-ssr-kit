context("Home Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.visit("/");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("initially displays a logo and an 'Employee Login' button", () => {
		cy.get(".container")
			.find(".text-wrapper")
			.should("have.length", 2)
			.find("span")
			.should(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				expect(elements[0].text()).to.equal("sharks");
				expect(elements[3].text()).to.equal("ice team");
			});

		cy.get("button")
			.should("have.length", 1)
			.should("have.text", "Employee Login");
	});

	it("redirects unauthenticated users to the login page", () => {
		cy.visit("/employee/dashboard");

		cy.url().should("contain", "/employee/login");

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Your access to the requested page was denied. You do not have the correct account permissions.",
			);
	});

	it("changes the home page to have a 'Go To Dashboard' button when logged in", () => {
		cy.request("POST", "/api/signin", {
			email: "carlotta.matt@gmail.com",
			password: "password",
		});

		cy.reload();

		cy.get("button").should("have.text", "Go To Dashboard");
	});
});
