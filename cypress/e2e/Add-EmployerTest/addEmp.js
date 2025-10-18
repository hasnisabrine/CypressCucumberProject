import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
//import { includes } from "cypress/types/lodash"; Cette logne empeche la lecture des tests

Before(() => {
  cy.login();
});

When("user clicks on PIM and clicks on Add employee", () => {
  // cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(1).click()

  cy.get('[href$="viewPimModule"]').click();
  cy.get("a.oxd-topbar-body-nav-tab-item").contains("Add Employee").click();
});

Then("user redirects to Add Employee page", () => {
  cy.url().should("includes", "pim/addEmployee");
});

When("remplir les champs obligatoires et clicker sur save", (datatable) => {
  datatable.hashes().forEach((element) => {
    cy.get('[name="firstName"]').type(element.FirstName); //enlever les espace
    cy.get('[name="middleName"]').type(element.MiddleName);
    cy.get('[name="lastName"]').type(element.LastName);
    cy.get('[type="submit"]').should("be.enabled").click({ force: true });
  });
});
