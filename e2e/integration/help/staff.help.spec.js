context("Staff Help Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/help");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the help page", () => {
		cy.get(".ant-card-head-title").contains("Help");
	});

	it("displays 4 collapsible items", () => {
		cy.get("div#category").then(elements => {
			cy.wrap(elements[0])
				.find(".ant-collapse-header")
				.first()
				.should("have.text", "General Questions");
			cy.wrap(elements[1])
				.find(".ant-collapse-header")
				.first()
				.should("have.text", "Employee Actions");
			cy.wrap(elements[2])
				.find(".ant-collapse-header")
				.first()
				.should("have.text", "Staff Actions");
			cy.wrap(elements[3])
				.find(".ant-collapse-header")
				.first()
				.should("have.text", "Other");
		});
	});
});
