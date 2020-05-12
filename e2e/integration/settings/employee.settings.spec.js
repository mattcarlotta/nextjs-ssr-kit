context("Employee Settings Page", () => {
	before(() => {
		cy.exec("npm run seed:stage");
	});

	beforeEach(() => {
		cy.request("POST", "/api/signin", {
			email: "member2@example.com",
			password: "password",
		});
		cy.reload();
		cy.visit("/employee/settings");
	});

	after(() => {
		cy.exec("npm run drop:stage");
	});

	it("intially displays the profile tab", () => {
		cy.get(".ant-tabs-tab-active").should("have.text", "Profile");
	});

	it("displays the availability tab", () => {
		cy.get("[role=tab]").eq(1).click();

		cy.get("[data-test=availability-pie]").should("have.length", 1);
		cy.get("[data-test=availability-bar]").should("have.length", 1);

		cy.get(".ant-select-lg").first().click();
		cy.get("body").type("{downarrow}").type("{downarrow}").type("{enter}");

		cy.get(".ant-empty-image").should("have.length", 1);
	});

	it("displays the responses tab", () => {
		cy.get("[role=tab]").eq(2).click();

		cy.get("[data-test=upcoming-event").should("have.length", 0);

		cy.get(".ant-select-lg").first().click();
		cy.get("body").type("{downarrow}").type("{enter}");

		cy.get("[data-test=upcoming-event").should("have.length", 0);
	});

	it("displays the current user details", () => {
		cy.get("[data-test=user-name]").should("have.text", "Member2 Member2");
		cy.get("[data-test=user-status]").should("have.text", "(active)");
		cy.get("[data-test=user-registered]").should(e => {
			const elements = e.map((_, el) => Cypress.$(el));

			expect(elements[0].text()).to.be.a("string");
		});
		cy.get("[data-test=user-role]").should("have.text", "employee");
	});

	it("updates the logged in user avatar", () => {
		cy.get("[data-test=open-avatar-form").click();

		cy.get("[data-test=upload-avatar-input]")
			.attach_file("files/example.png", "image/png")
			.trigger("change", { force: true });

		cy.wait(500);

		cy.get("[data-test=upload-avatar-form]").submit();

		cy.get("[data-test=toast-message]")
			.first()
			.should("have.length", 1)
			.and("have.text", "Successfully updated your current avatar.");

		// cy.get("[data-test=toast-alert]").click();

		// cy.wait(500);

		cy.get("[data-test=delete-avatar]").click();

		cy.get("[data-test=toast-message]")
			.eq(1)
			.should("have.length", 1)
			.and("have.text", "Successfully removed your current avatar.");
	});

	it("updates the logged in user first and last name", () => {
		cy.get("[name=firstName]").clear().type("John");
		cy.get("[name=lastName]").clear().type("Smith");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and("have.text", "Successfully updated your settings.");

		cy.get("[data-test=user-name]").should("have.text", "John Smith");

		cy.get(".firstname").contains("John");
		cy.get(".lastname").contains("Smith");
	});

	it("updates the logged in user email and logs them out", () => {
		cy.get("[name=email]").clear().type("john@smith.com");

		cy.get("form").submit();

		cy.get("[data-test=toast-message]")
			.should("have.length", 1)
			.and(
				"have.text",
				"Your profile has been updated. Please re-log into your account with your new email address.",
			);

		cy.url().should("contain", "/employee/login");

		cy.get("[name=email]").type("john@smith.com");

		cy.get("[name=password]").type("password");

		cy.get("form").submit();

		cy.url().should("contain", "/employee/dashboard");

		cy.get(".firstname").contains("John");
		cy.get(".lastname").contains("Smith");
	});
});
