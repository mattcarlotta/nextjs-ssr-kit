const moment = require("../../../src/utils/momentWithTZ");

context("Staff Create Season Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/seasons/create");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the create season form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("displays errors if empty fields are submitted", () => {
		cy.get("form").submit();

		cy.get("[data-test=errors]").should("have.length", 2);
	});

	it("pushes back to viewall seasons page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/seasons/viewall?page=1");
	});

	it("rejects creating a season that already exists", () => {
		const currentYear = moment().startOf("year").format("MMMM D, YYYY");
		const nextYear = moment()
			.add(1, "year")
			.endOf("year")
			.format("MMMM D, YYYY");

		cy.get(".ant-calendar-picker").first().click();

		cy.get(".ant-calendar-month-select").first().click();

		cy.get("td[title=Jan]").click();

		cy.get(".ant-calendar-month-select").eq(1).click();

		cy.get("td[title=Dec]").click();

		cy.get(".ant-calendar-year-select").eq(1).click();

		cy.get(".ant-calendar-year-panel-cell").eq(2).click();

		cy.get(`td[title='${currentYear}']`).click();

		cy.get(`td[title='${nextYear}']`).click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"That season already exists. Please edit the current season or choose a different start and end dates.",
			);
	});

	it("creates a new season", () => {
		const twoYearsFromNow = moment().add(2, "year").startOf("year");
		const threeYearsFromNow = moment().add(3, "year").endOf("year");

		cy.get(".ant-calendar-picker").first().click();

		cy.get(".ant-calendar-month-select").first().click();

		cy.get("td[title=Jan]").click();

		cy.get(".ant-calendar-year-select").first().click();

		cy.get(`td[title='${twoYearsFromNow.format("YYYY")}']`).click();

		cy.get(".ant-calendar-year-select").eq(1).click();

		cy.get(`td[title='${threeYearsFromNow.format("YYYY")}']`).click();

		cy.get(".ant-calendar-month-select").eq(1).click();

		cy.get("td[title=Dec]").click();

		cy.get(`td[title='${twoYearsFromNow.format("MMMM D, YYYY")}']`).click();

		cy.get(`td[title='${threeYearsFromNow.format("MMMM D, YYYY")}']`).click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully created a new season!");

		cy.url().should("contain", "/employee/seasons/viewall?page=1");
	});
});
