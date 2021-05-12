// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
/// <reference types="cypress" />

Cypress.Commands.add("alertExistsWith", message => {
  cy.get("[data-testid='alert-message']").should("exist").contains(message);

  cy.get("[data-testid='alert-message']").click();
});

Cypress.Commands.add("findElementByNameAttribute", (element, name) =>
  cy.get(`${element}[name='${name}']`)
);

Cypress.Commands.add("findByTestId", value =>
  cy.get(`[data-testid='${value}']`)
);

Cypress.Commands.add("formHasErrors", errors => {
  cy.get("[data-testid='errors']").should("have.length", errors);
});

Cypress.Commands.add("submitForm", () => {
  cy.get("[data-testid='submit']").should("exist").click();
});
