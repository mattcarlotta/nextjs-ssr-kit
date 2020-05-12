context("Employee Dashboard Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "member@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/dashboard");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("only displays employee routes in the side navigation", () => {
		cy.get("[data-test=nav-link]")
			.should("have.length", 7)
			.and(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				expect(elements[0].text()).to.equal("dashboard");
				expect(elements[1].text()).to.equal("schedule");
				expect(elements[2].text()).to.equal("settings");
				expect(elements[3].text()).to.equal("help");
				expect(elements[4].text()).to.equal("contact us");
				expect(elements[5].text()).to.equal("privacy policy");
				expect(elements[6].text()).to.equal("licensing");
			});
	});

	it("displays the current logged in user first and last name", () => {
		cy.get(".firstname").contains("Member");
		cy.get(".lastname").contains("Member");
	});

	it("displays events, forms, availability and event distribution tiles", () => {
		cy.get(".ant-card-head-title").should(e => {
			const elements = e.map((_, el) => Cypress.$(el));

			expect(elements[0].text()).to.equal("Events");
			expect(elements[1].text()).to.equal("Forms");
			expect(elements[2].text()).to.equal("Availability");
			expect(elements[3].text()).to.equal("Event Distribution");
		});
	});

	it("displays and hides an event details", () => {
		cy.get("[data-test=upcoming-event]").click();

		cy.get("[data-test=upcoming-event-details]")
			.find("li")
			.should(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				expect(elements[0].text()).to.contain(
					"San Jose Barracudavs.Chicago Wolves",
				);
				expect(elements[1].text()).to.contain("Game");
				expect(elements[2].text()).to.be.a("string");
				expect(elements[3].text()).to.contain("Unscheduled game.");
				expect(elements[4].text()).to.contain("SAP Center at San Jose");
				expect(elements[5].text()).to.contain("Barracuda Jacket");
			});

		cy.get("button#close-modal").click();

		cy.get("[data-test=upcoming-event-details]").should("not.exist");
	});

	it("displays upcoming games", () => {
		cy.get(".ant-select").first().click();

		cy.get(".ant-select-dropdown-menu-item").eq(1).click();

		cy.get("[data-test=no-events]").should("have.length", 1);
	});

	it("displays current user availability average", () => {
		cy.get("[data-test=availability-avg").should("have.text", "0%");
	});

	it("displays the current logged in user first and last name", () => {
		cy.get(".firstname").contains("Member");
		cy.get(".lastname").contains("Member");
	});

	it("displays events, forms, availability and event distribution tiles", () => {
		cy.get(".ant-card-head-title").should(e => {
			const elements = e.map((_, el) => Cypress.$(el));

			expect(elements[0].text()).to.equal("Events");
			expect(elements[1].text()).to.equal("Forms");
			expect(elements[2].text()).to.equal("Availability");
			expect(elements[3].text()).to.equal("Event Distribution");
		});
	});

	it("displays and hides an event details", () => {
		cy.get("[data-test=upcoming-event]").click();

		cy.get("[data-test=upcoming-event-details]")
			.find("li")
			.should(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				expect(elements[0].text()).to.contain(
					"San Jose Barracudavs.Chicago Wolves",
				);
				expect(elements[1].text()).to.contain("Game");
				expect(elements[2].text()).to.be.a("string");
				expect(elements[3].text()).to.contain("Unscheduled game.");
				expect(elements[4].text()).to.contain("SAP Center at San Jose");
				expect(elements[5].text()).to.contain("Barracuda Jacket");
			});

		cy.get("button#close-modal").click();

		cy.get("[data-test=upcoming-event-details]").should("not.exist");
	});

	it("displays upcoming games", () => {
		cy.get(".ant-select").first().click();

		cy.get(".ant-select-dropdown-menu-item").eq(1).click();

		cy.get("[data-test=no-events]").should("have.length", 1);
	});

	it("displays current user availability average", () => {
		cy.get("[data-test=availability-avg").should("have.text", "0%");
	});

	it("prevents a user from submitting an empty AP form", () => {
		cy.get("[data-test=view-apform]").click();

		cy.get("form").submit();

		cy.get("[data-test=errors]").should("have.length", 3);
	});

	it("allows a user to view and update the current AP Form", () => {
		cy.get("[data-test=view-apform]").click();

		cy.get("form")
			.should("have.length", 1)
			.find(".radio-value")
			.then(e => {
				const elements = e.map((_, el) => Cypress.$(el));

				cy.wrap(elements[0]).click();
				cy.wrap(elements[4]).click();
				cy.wrap(elements[8]).click();
			});

		cy.get("form").submit();

		cy.url().should("contain", "/employee/dashboard");

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully added your responses to the A/P form!");

		cy.get("[data-test=availability-avg").should("have.text", "100%");
	});

	it("navigates the user to the settings page", () => {
		cy.get("[data-test=account-dropdown").click();
		cy.get("[data-test=visit-settings").click();

		cy.url().should("contain", "/employee/settings");
	});

	it("logs out the user", () => {
		cy.get("[data-test=account-dropdown").click();
		cy.get("[data-test=signout-user").click();

		cy.url().should("contain", "/employee/login");
	});
});
