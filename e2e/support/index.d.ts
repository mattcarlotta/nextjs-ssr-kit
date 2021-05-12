/// <reference types="cypress" />

declare namespace Cypress {
  export interface Chainable {
    /**
     * Custom command to check if a toast alert exists and contains text.
     * @example cy.alert("message")
     */
    alertExistsWith(message: string): void;

    /**
     * Custom command to select a DOM element by name attribute.
     * @example cy.findByTestId("input","example")
     */
    findElementByNameAttribute(
      element: string,
      name: string
    ): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to select a DOM element by data-testid attribute.
     * @example cy.findByTestId("greeting")
     */
    findByTestId(value: string): Chainable<JQuery<HTMLElement>>;

    /**
     * Custom command to assert that a form has errors.
     * @example cy.formHasErrors(1)
     */
    formHasErrors(errors: number): void;

    /**
     * Custom command to click a submit button within a form.
     * @example cy.submitForm()
     */
    submitForm(): void;
  }
}
