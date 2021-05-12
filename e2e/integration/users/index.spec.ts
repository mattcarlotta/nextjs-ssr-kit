const selectCardOption = (option: string, item: number = 1): void => {
  cy.findByTestId("dropdown-container").eq(item).click();

  cy.findByTestId("dropdown-menu").within(() => {
    cy.get(`[data-testid='${option}']`).click();
  });
};

const clearAlerts = (): void => {
  cy.findByTestId("alert").click();

  cy.wait(1000);
};

context("Users Page", () => {
  before(() => {
    cy.exec("npm run seed:prod");
  });

  beforeEach(() => {
    cy.visit("/users");
    clearAlerts();
  });

  after(() => {
    cy.exec("npm run drop:prod");
  });

  it("displays the cards when data is present", () => {
    cy.findByTestId("seed-database").click();

    cy.findByTestId("card-container").should("have.length", 3);
  });

  it("deletes a user card", () => {
    selectCardOption("delete");

    cy.findByTestId("card-container").should("have.length", 2);

    cy.alertExistsWith("Successfully deleted notjohnsson.");
  });

  it("displays an edit form", () => {
    selectCardOption("edit");

    cy.findByTestId("user-form").should("exist");
  });

  it("renders errors if a required input is empty", () => {
    selectCardOption("edit");

    cy.findByTestId("userName").clear();

    cy.findByTestId("submit").click();

    cy.findByTestId("errors").should("have.length", 1);
  });

  it("displays an error if an edited username matches a pre-existing username", () => {
    selectCardOption("edit");

    cy.findByTestId("userName").clear().type("bobbin4apples");

    cy.findByTestId("submit").click();

    cy.alertExistsWith("That username is already in use!");
  });

  it("cancels updating the user", () => {
    selectCardOption("edit");

    cy.findByTestId("cancel").click();

    cy.findByTestId("user-form").should("not.exist");
  });

  it("updates a user", () => {
    selectCardOption("edit");

    cy.findByTestId("userName").clear().type("snapplecracklepop");

    cy.findByTestId("submit").click();

    cy.alertExistsWith("Successfully updated snapplecracklepop.");
  });

  it("displays a create user form", () => {
    cy.findByTestId("open-modal").click();

    cy.findByTestId("user-form").should("exist");
  });

  it("cancels creating a user either by closing the modal or clicking the 'Cancel' button", () => {
    cy.findByTestId("open-modal").click();

    cy.findByTestId("user-form").should("exist");

    cy.findByTestId("close-modal").click();

    cy.findByTestId("user-form").should("not.exist");

    cy.findByTestId("open-modal").click();

    cy.findByTestId("user-form").should("exist");

    cy.findByTestId("cancel").click();

    cy.findByTestId("user-form").should("not.exist");
  });

  it("displays errors when attempting to submit a form with empty fields", () => {
    cy.findByTestId("open-modal").click();

    cy.findByTestId("submit").click();

    cy.findByTestId("errors").should("have.length", 9);
  });

  it("displays an error if trying to create a user that already exists", () => {
    cy.findByTestId("open-modal").click();
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
      "backgroundInfo"
    ].forEach(name => {
      let value = "123@email.com";
      if (name === "userName") value = "bobbin4apples";
      cy.findByTestId(name).type(value);
    });

    cy.findByTestId("submit").click();

    cy.alertExistsWith("That username is already in use!");
  });

  it("creates a new user", () => {
    cy.findByTestId("open-modal").click();
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
      "backgroundInfo"
    ].forEach(name => {
      cy.findByTestId(name).type("123@email.com");
    });

    cy.findByTestId("submit").click();

    cy.alertExistsWith("Successfully created 123@email.com.");
  });

  it("when the 'Go Back' link is pressed, it navigates to home", () => {
    cy.findByTestId("link").click();

    cy.url().should("contain", "/");

    cy.findByTestId("home-page").should("exist");
  });
});
