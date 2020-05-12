const moment = require("../../../src/utils/momentWithTZ");

const findFloorYear = date => Math.floor(parseInt(date, 10) / 10) * 10;

context("Staff Edit Season Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/seasons/viewall?page=1");
		cy.get("[data-test=table-actions]").last().click();
		cy.get("[data-test=edit-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the edit season form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall seasons page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/seasons/viewall?page=1");
	});

	it("rejects creating a season that already exists", () => {
		const thisYear = moment();
		const nextYear = moment().add(1, "year");
		const currentYearRounded = findFloorYear(thisYear.format("YYYY"));
		const currentYearDate = thisYear.startOf("year");
		const nextYearRounded = findFloorYear(nextYear.format("YYYY"));
		const nextYearDate = nextYear.endOf("year");

		cy.get(".ant-calendar-picker").first().click();

		cy.get(".ant-calendar-month-select").first().click();

		cy.get("td[title=Jan]").click();

		cy.get(".ant-calendar-year-select").first().click();

		cy.get(".ant-calendar-year-panel-decade-select").click();

		cy.get(".ant-calendar-decade-panel-next-century-btn").click();

		cy.get(".ant-calendar-decade-panel-cell")
			.find("a")
			.contains(`${currentYearRounded}`)
			.click();

		cy.get(`td[title='${currentYearDate.format("YYYY")}']`).click();

		cy.get(".ant-calendar-year-select").eq(1).click();

		cy.get(".ant-calendar-year-panel-decade-select").click();

		cy.get(".ant-calendar-decade-panel-next-century-btn").click();

		cy.get(".ant-calendar-decade-panel-cell")
			.find("a")
			.contains(`${nextYearRounded}`)
			.click();

		cy.get(`td[title='${nextYearDate.format("YYYY")}']`).click();

		cy.get(".ant-calendar-month-select").eq(1).click();

		cy.get("td[title=Dec]").click();

		cy.get(`td[title='${currentYearDate.format("MMMM D, YYYY")}']`).click();

		cy.get(`td[title='${nextYearDate.format("MMMM D, YYYY")}']`).click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"That season already exists. Please edit the current season or choose a different start and end dates.",
			);
	});

	it("updates a season", () => {
		const startSeasonYear = moment("1980", "YYYY")
			.add(1, "year")
			.startOf("year");
		const endSeasonYear = moment("1981", "YYYY").add(1, "year").endOf("year");

		cy.get(".ant-calendar-picker").first().click();

		cy.get(".ant-calendar-month-select").first().click();

		cy.get("td[title=Jan]").click();

		cy.get(".ant-calendar-year-select").first().click();

		cy.get(`td[title='${startSeasonYear.format("YYYY")}']`).click();

		cy.get(".ant-calendar-year-select").eq(1).click();

		cy.get(`td[title='${endSeasonYear.format("YYYY")}']`).click();

		cy.get(".ant-calendar-month-select").eq(1).click();

		cy.get("td[title=Dec]").click();

		cy.get(`td[title='${startSeasonYear.format("MMMM D, YYYY")}']`).click();

		cy.get(`td[title='${endSeasonYear.format("MMMM D, YYYY")}']`).click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated the season.");

		cy.url().should("contain", "/employee/seasons/viewall?page=1");

		cy.get("td").contains("19811982");
	});
});
