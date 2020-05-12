context("Staff Edit Form Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "staffmember@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/forms/viewall?page=1");
		cy.get("[data-test=table-actions]").last().click();
		cy.get("[data-test=edit-location]").click();
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("displays the Edit Form form", () => {
		cy.get("form").should("have.length", 1);
	});

	it("pushes back to viewall forms page", () => {
		cy.get("[data-test=go-back]").click();

		cy.url().should("contain", "/employee/forms/viewall?page=1");
	});

	// it("rejects creating a form that already exists", () => {
	// 	const thisYear = moment();
	// 	const currentYearRounded = findFloorYear(thisYear.format("YYYY"));
	// 	const currentYearDate = thisYear.startOf("year");

	// 	cy.get(".clickhandler").click();

	// 	cy.get("[data-name=seasonId]").first().click();

	// 	cy.get(".ant-calendar-picker").first().click();

	// 	const setEnrollMonth = () => {
	// 		[1, 0].forEach(key => {
	// 			cy.get(".ant-calendar-year-select").eq(key).click();
	// 			cy.get(".ant-calendar-year-panel-decade-select").click();
	// 			cy.get(".ant-calendar-decade-panel-cell")
	// 				.find("a")
	// 				.contains(`${currentYearRounded}`)
	// 				.click();
	// 			cy.get(`td[title='${currentYearDate.format("YYYY")}']`).click();
	// 			cy.get(".ant-calendar-month-select").eq(key).click();
	// 			cy.get(`td[title='${moment().format("MMM")}']`).click();
	// 		});
	// 	};

	// 	setEnrollMonth();
	// 	cy.get(
	// 		`td[title='${moment().startOf("month").format("MMMM D, YYYY")}']`,
	// 	).click();
	// 	cy.get(`td[title='${moment().endOf("month").format("MMMM D, YYYY")}']`)
	// 		.first()
	// 		.click();

	// 	cy.get("form").submit();

	// 	cy.get("[data-test=toast-message]")
	// 		.should("have.length", 1)
	// 		.and(
	// 			"have.text",
	// 			"The selected Enrollment Month dates have already been assigned to another A/P form. Please choose different dates.",
	// 		);
	// });

	it("updates the form", () => {
		cy.get(".ant-calendar-picker").first().click();

		cy.get(".ant-calendar-prev-month-btn").first().click();

		cy.get("[title='July 1, 2005']").click();
		cy.get("[title='July 31, 2005']").first().click();

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated the form!");

		cy.url().should("contain", "/employee/forms/viewall?page=1");
	});
});
