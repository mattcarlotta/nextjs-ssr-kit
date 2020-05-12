context("Staff Licensing Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/licensing");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the licensing page", () => {
		cy.get(".ant-card-head-title").contains("Licensing");
	});
});
