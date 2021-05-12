context("Home Page", () => {
  beforeEach(() => {
    cy.visit("/notfound", { failOnStatusCode: false });
  });

  it("initially displays a welcome message", () => {
    cy.alertExistsWith("Welcome to the NextJS SSR Kit!");
  });

  it("initially displays a logo and with a  'See Example' link", () => {
    cy.findByTestId("not-found-page").should("exist");

    cy.findByTestId("link")
      .should("have.length", 1)
      .and("have.attr", "href", "/");
  });

  it("allows a user to navigate to the home page", () => {
    cy.findByTestId("link").click();

    cy.url().should("contain", "/");

    cy.findByTestId("home-page").should("exist");
  });
});
