context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("initially displays a welcome message", () => {
    cy.get("[data-testid=modal-message]").should(
      "have.text",
      "Welcome to the NextJS SSR Kit!",
    );
  });

  it("initially displays a logo and with a  'See Example' link", () => {
    cy.get("[data-testid=home-page]").find("img").should("have.length", 1);

    cy.get("[data-testid=link]")
      .should("have.length", 1)
      .and("have.attr", "href", "/users");
  });

  it("allows a user to navigate to the example page", () => {
    cy.get("[data-testid=link]").click();

    cy.url().should("contain", "/users");

    cy.get("[data-testid=users-page]").should("have.length", 1);
  });
});
