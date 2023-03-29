/// <reference types="cypress" />
import {
  urlSuccess,
  invalidUsernameError,
  invalidPasswordError,
} from '../fixtures/example.json';

context('Login Test', () => {
  it('Test case 1: Positive LogIn test', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('input[type=text]').type(Cypress.env('USERNAME'));
    cy.get('input[name=password]').type(Cypress.env('PASSWORD'));
    cy.get('#submit').click();
    cy.url().should('contains', urlSuccess);
    cy.get('.has-text-align-center')
      .contains('Congratulations')
      .should('be.visible');
    cy.get('a').contains('Log out').should('be.visible');
  });

  it('Test case 2: Negative username test', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('input[type=text]').type('incorrectUser');
    cy.get('input[name=password]').type(Cypress.env('PASSWORD'));
    cy.get('#submit').click();

    // 1st assertion
    cy.get('#error').should('be.visible');

    // 2nd assertion
    cy.get('#error').should('have.text', invalidUsernameError);
  });

  it('Test case 3: Negative password test', () => {
    cy.visit('https://practicetestautomation.com/practice-test-login/');
    cy.get('input[type=text]').type(Cypress.env('USERNAME'));
    cy.get('input[name=password]').type('incorrectPassword');
    cy.get('#submit').click();

    // 1st assertion
    cy.get('#error').should('be.visible');

    // 2nd assertion
    cy.get('#error').should('have.text', invalidPasswordError);
  });
});
