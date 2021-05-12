context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("initially displays a welcome message", () => {
    cy.alertExistsWith("Welcome to the NextJS SSR Kit!");
  });

  it("initially displays a logo and with a  'See Example' link", () => {
    cy.findByTestId("home-page").find("img").should("exist");

    cy.findByTestId("link").should("exist").and("have.attr", "href", "/users");
  });

  it("allows a user to navigate to the example page", () => {
    cy.findByTestId("link").click();

    cy.url().should("contain", "/users");

    cy.findByTestId("users-page").should("exist");
  });
});
