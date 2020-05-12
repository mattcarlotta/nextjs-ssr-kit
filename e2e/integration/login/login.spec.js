context("Login Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.visit("/employee/login");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays a login screen", () => {
		cy.get("form").should("have.length", 1);
	});

	it("fills out the 'Email' input", () => {
		cy.get("form")
			.find("input")
			.first()
			.type("carlotta.matt@gmail.com")
			.should("have.value", "carlotta.matt@gmail.com");
	});

	it("fills out the 'Passowrd' input", () => {
		cy.get("form")
			.find("input")
			.eq(1)
			.type("password")
			.should("have.value", "password");
	});

	it("displays required fields if the form is submitted with empty fields", () => {
		cy.get("form").submit();

		cy.get(".error").should("have.length", 2);
	});

	it("displays an error if the form is submitted with invalid fields", () => {
		cy.get("[name=email]").type("carlotta.matt@gmail.com");

		cy.get("[name=password]").type("passw");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"There was a problem with your login credentials. Please make sure your username and password are correct.",
			);
	});

	it("logs the user in and redirects them to the dashboard", () => {
		cy.get("[name=email]").type("carlotta.matt@gmail.com");

		cy.get("[name=password]").type("password");

		cy.get("form").submit();

		cy.url().should("contain", "/employee/dashboard");
	});

	it("rejects suspended users", () => {
		cy.get("[name=email]").type("member5@example.com");

		cy.get("[name=password]").type("password");

		cy.get("form").submit();

		cy.get("[data-test=toast-alert]")
			.should("have.length", 1)
			.find("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Access to your account was revoked. The account you're trying to log into has been permanently suspended.",
			);
	});
});
