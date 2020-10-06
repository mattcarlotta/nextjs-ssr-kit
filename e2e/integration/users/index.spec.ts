const selectCardOption = (option: string, item: number = 1): void => {
  cy.get("[data-testid=dropdown-container]").eq(item).click();
  cy.get("[data-testid=dropdown-menu]").within(() => {
    cy.get(`[data-testid='${option}']`).click();
  });
};

context("Users Page", () => {
  before(() => {
    cy.exec("npm run seed:prod");
  });

  beforeEach(() => {
    cy.visit("/users");
  });

  after(() => {
    cy.exec("npm run drop:prod");
  });

  it("displays the cards when data is present", () => {
    cy.get("[data-testid=seed-database]").click();

    cy.get("[data-testid=card-container]").should("have.length", 3);
  });

  it("deletes a user card", () => {
    cy.get("[data-testid=modal-alert]").click();

    selectCardOption("delete");

    cy.get("[data-testid=card-container]").should("have.length", 2);

    cy.get("[data-testid=modal-message]")
      .should("have.length", 1)
      .and("have.text", "Successfully deleted notjohnsson.");
  });

  it("displays an edit form", () => {
    selectCardOption("edit");

    cy.get("[data-testid=user-form]").should("have.length", 1);
  });

  it("renders errors if a required input is empty", () => {
    selectCardOption("edit");

    cy.get("input[data-testid=userName]").clear();

    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=errors]").should("have.length", 1);
  });

  it("displays an error if an edited username matches a pre-existing username", () => {
    cy.get("[data-testid=modal-alert]").click();

    selectCardOption("edit");

    cy.get("input[data-testid=userName]").clear().type("bobbin4apples");

    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=modal-message]")
      .should("have.length", 1)
      .and("have.text", "That username is already in use!");
  });

  it("cancels updating the user", () => {
    cy.get("[data-testid=modal-alert]").click();

    selectCardOption("edit");

    cy.get("[data-testid=cancel]").click();

    cy.get("[data-testid=user-form").should("have.length", 0);
  });

  it("updates a user", () => {
    cy.get("[data-testid=modal-alert]").click();

    selectCardOption("edit");

    cy.get("input[data-testid=userName]").clear().type("snapplecracklepop");

    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=modal-message]")
      .should("have.length", 1)
      .and("have.text", "Successfully updated snapplecracklepop.");
  });

  it("displays a create user form", () => {
    cy.get("[data-testid=modal-alert]").click();

    cy.get("[data-testid=open-modal]").click();

    cy.get("[data-testid=user-form]").should("have.length", 1);
  });

  it("cancels creating a user", () => {
    cy.get("[data-testid=open-modal]").click();

    cy.get("[data-testid=user-form]").should("have.length", 1);

    cy.get("[data-testid=close-modal]").click();

    cy.get("[data-testid=user-form]").should("have.length", 0);

    cy.get("[data-testid=open-modal]").click();

    cy.get("[data-testid=user-form]").should("have.length", 1);

    cy.get("[data-testid=cancel]").click();

    cy.get("[data-testid=user-form]").should("have.length", 0);
  });

  it("displays errors when attempting to submit a form with empty fields", () => {
    cy.get("[data-testid=open-modal]").click();

    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=errors]").should("have.length", 9);
  });

  it("displays an error if trying to create a user that already exists", () => {
    cy.get("[data-testid=modal-alert]").click();

    cy.get("[data-testid=open-modal]").click();
    [
      "userName",
      "email",
      "firstName",
      "lastName",
      "street",
      "suite",
      "city",
      "state",
      "zipCode",
      "backgroundInfo",
    ].forEach(name => {
      let value = "123@email.com";
      if (name === "userName") value = "bobbin4apples";
      cy.get(`[data-testid=${name}]`).type(value);
    });
    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=modal-message]")
      .should("have.length", 1)
      .and("have.text", "That username is already in use!");
  });

  it("creates a new user", () => {
    cy.get("[data-testid=modal-alert]").click();

    cy.get("[data-testid=open-modal]").click();
    [
      "userName",
      "email",
      "firstName",
      "lastName",
      "street",
      "suite",
      "city",
      "state",
      "zipCode",
      "backgroundInfo",
    ].forEach(name => {
      cy.get(`[data-testid=${name}]`).type("123@email.com");
    });
    cy.get("[data-testid=submit]").click();

    cy.get("[data-testid=modal-message]")
      .should("have.length", 1)
      .and("have.text", "Successfully created 123@email.com.");
  });

  it("when the 'Go Back' link is pressed, it navigates to home", () => {
    cy.get("[data-testid=link]").click();

    cy.url().should("contain", "/");

    cy.get("[data-testid=home-page]").should("have.length", 1);
  });
});
