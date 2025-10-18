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

Cypress.Commands.add("login", (username, password) => {
  if (!username) {
    username = Cypress.env("username");
  }
  if (!password) {
    password = Cypress.env("password"); //Cypress.env au lieu de Cypress.en
  }
  if (!username) {
    throw new Error("User not defined");
  }
  cy.visit("/");

  cy.get('[name="username"]').type(username);
  cy.get('[name="password"]').type(password);
  cy.get('[type="submit"]').click().wait(3000);
  cy.url().should("include", "dashboard");
});
