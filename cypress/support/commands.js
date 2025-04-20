require('cypress-xpath');
require('cypress-file-upload');

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
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
import 'cypress-file-upload';


Cypress.Commands.add("acceptDisclaimerIfVisible", (modalSelector, agreeBtnSelector) => {
    cy.xpath(modalSelector, { timeout: 3000 }).then(($modal) => {
      if ($modal.length > 0) {
        cy.wrap($modal).should("be.visible");
        cy.wait(2000);
        cy.xpath(agreeBtnSelector).should("be.visible").click();
        cy.xpath(modalSelector).should("not.exist");
      } else {
        cy.log("Disclaimer modal not found");
      }
    });
  });