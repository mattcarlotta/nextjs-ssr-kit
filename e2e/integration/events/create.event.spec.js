const moment = require("../../../src/utils/momentWithTZ");

const currentYearDate = moment().format("YYYY");
const nextYearDate = moment().add(1, "year").format("YYYY");

const currentSeason = `${currentYearDate}${nextYearDate}`;

context("Staff Create Event Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/events/create");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the create event form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall events page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/events/viewall?page=1");
	});

	it("displays errors if empty fields are submitted", () => {
		cy.get("form").submit();

		cy.get("[data-test=errors]").should("have.length", 3);
	});

	it("creates a Sharks vs. Leafs game event", () => {
		const clickDefaultTimeSlots = () => {
			[0, 1, 2].map(key =>
				cy
					.get(".ant-time-picker-panel-select")
					.eq(key)
					.find("li[role=button]")
					.first()
					.click(),
			);
		};

		cy.get(".clickhandler").first().click();

		cy.get("[data-name=seasonId]").first().click();

		cy.get(
			"input[placeholder='Search and select an opponent (if applicable)...']",
		).type("Maple");

		cy.get("[data-value='Toronto Maple Leafs']").click();

		cy.get("input[name=eventDate]").click();

		cy.get(".ant-calendar-selected-day").first().click();

		cy.get(".ant-calendar-ok-btn").first().click();

		cy.get("input[name=callTime]").click();

		clickDefaultTimeSlots();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				`Successfully added a new event to the ${currentSeason} season.`,
			);

		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get("#opponent").click();

		cy.get(".ant-select").click();

		cy.get(".ant-select-dropdown-menu-item").eq(53).click();

		cy.get(".ant-table-fixed").first().click();

		cy.get(".ant-pagination-total-text").contains("1 items");
	});

	it("creates a Sharks promo event", () => {
		const clickDefaultTimeSlots = () => {
			[0, 1, 2].map(key =>
				cy
					.get(".ant-time-picker-panel-select")
					.eq(key)
					.find("li[role=button]")
					.first()
					.click(),
			);
		};

		cy.get(".clickhandler").first().click();

		cy.get("[data-name=seasonId]").first().click();

		cy.get(".clickhandler").eq(1).click();

		cy.get("[data-name=eventType]").eq(1).click();

		cy.get("input[name=eventDate]").click();

		cy.get(".ant-calendar-selected-day").first().click();

		cy.get(".ant-calendar-ok-btn").first().click();

		cy.get("input[name=callTime]").click();

		clickDefaultTimeSlots();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				`Successfully added a new event to the ${currentSeason} season.`,
			);

		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get("#event-type").click();

		cy.get(".ant-select").click();

		cy.get(".ant-select-dropdown-menu-item").eq(1).click();

		cy.get(".ant-table-fixed").first().click();

		cy.get(".ant-pagination-total-text").contains("1 items");
	});
});
