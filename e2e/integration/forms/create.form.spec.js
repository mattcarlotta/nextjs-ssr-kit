const moment = require("../../../src/utils/momentWithTZ");

const lastMonthStart = moment().subtract(1, "month").startOf("month");
const lastMonthEnd = moment().subtract(1, "month").endOf("month");

context("Staff Create Form Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/forms/create");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Create AP Form form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall forms page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/forms/viewall?page=1");
	});

	it("displays errors if empty fields are submitted", () => {
		cy.get("form").submit();

		cy.get("[data-test=errors]").should("have.length", 2);
	});

	it("rejects selecting an expired date", () => {
		cy.get(".clickhandler").click();

		cy.get("[data-name=seasonId]").eq(3).click();

		cy.get("input[placeholder='Start date']").click();

		cy.get(".ant-calendar-prev-month-btn").click();

		cy.get(`[title='${lastMonthStart.format("MMMM D, YYYY")}']`).click();

		cy.get(`[title='${lastMonthEnd.format("MMMM D, YYYY")}']`)
			.first()
			.click();

		cy.get(".date-picker").find("input").first().click();

		cy.get(".ant-calendar-prev-month-btn").eq(1).click();

		cy.get("input[placeholder='Select a start date and time...']")
			.eq(2)
			.type("03/21/2020 5:00pm")
			.type("{enter}");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"The selected 'Expiration Date' has already past. Please select a later date.",
			);

		cy.get("[data-test=toast-message]").click();
	});

	it("rejects creating a form that already exists", () => {
		cy.get(".clickhandler").click();

		cy.get("[data-name=seasonId]").first().click();

		cy.get(".date-picker").find("input").first().click();

		cy.get(".ant-calendar-selected-day").click();

		cy.get(".ant-calendar-ok-btn").click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"The selected Enrollment Month dates have already been assigned to another A/P form. Please choose different dates.",
			);

		cy.get("[data-test=toast-message]").click();
	});

	it("creates a new form", () => {
		cy.get(".clickhandler").click();

		cy.get("[data-name=seasonId]").eq(3).click();

		cy.get("input[placeholder='Start date']").click();

		cy.get(".ant-calendar-prev-month-btn").click();

		cy.get(`[title='${lastMonthStart.format("MMMM D, YYYY")}']`).click();

		cy.get(`[title='${lastMonthEnd.format("MMMM D, YYYY")}']`)
			.first()
			.click();

		cy.get(".date-picker").find("input").first().click();

		cy.wait(500);

		cy.get(".ant-calendar-selected-day").click();

		cy.get(".ant-calendar-ok-btn").click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully created a new form!");

		cy.url().should("contain", "/employee/forms/viewall?page=1");
	});
});
