context("Staff Privacy Policy Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/privacy");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the privacy page", () => {
		cy.get(".ant-card-head-title").contains("Privacy & Warranty Policy");
	});
});
