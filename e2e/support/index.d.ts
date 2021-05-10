/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable {
    /**
     * Custom command to select a DOM element by data-testid attribute.
     * @example cy.findByTestId("greeting")
     */
    findByTestId(value: string): Chainable<JQuery<HTMLElement>>;
  }
}
