context("Staff Edit Event Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/events/viewall?page=1");
		cy.get("[data-test=table-actions]").eq(4).click({ force: true });
		cy.get("[data-test=edit-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Edit Event form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall events page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/events/viewall?page=1");
	});

	it("updates an event (with no side effects)", () => {
		cy.get("[data-test=go-back]").click();
		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get(".ant-table-row")
			.eq(4)
			.find("td")
			.eq(3)
			.find("img")
			.should("have.attr", "alt")
			.should("include", "Chicago Wolves.png");

		cy.get(".ant-table-row").eq(4).find("td").eq(10).contains("1");

		cy.get("[data-test=table-actions]").eq(4).click({ force: true });
		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/events/edit");

		cy.get("[data-test=clear-selection]").click();

		cy.get("[data-value='Milwaukee Admirals'").click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated the event.");

		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get(".ant-table-row")
			.eq(4)
			.find("td")
			.eq(3)
			.find("img")
			.should("have.attr", "alt")
			.should("include", "Milwaukee Admirals.png");

		cy.get(".ant-table-row").eq(4).find("td").eq(10).contains("1");
	});

	it("updates an event (with side effects)", () => {
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

		cy.get("[data-test=go-back]").click();
		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get(".ant-table-row").eq(4).find("td").eq(10).contains("1");

		cy.get("[data-test=table-actions]").eq(4).click({ force: true });
		cy.get("[data-test=edit-location]").click();

		cy.url().should("contain", "/employee/events/edit");

		cy.get("input[name=callTime]").click();

		clickDefaultTimeSlots();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated the event.");

		cy.url().should("contain", "/employee/events/viewall?page=1");

		cy.get(".ant-table-row").eq(4).find("td").eq(10).contains("0");
	});
});
