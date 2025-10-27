import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";
//import { includes } from "cypress/types/lodash"; Cette logne empeche la lecture des tests
import addEmployeePageObject from "./addEmployeePageObject.js";

Before(() => {
  cy.login();
});

When("user clicks on PIM and clicks on Add employee", () => {
  // cy.get('[class="oxd-text oxd-text--span oxd-main-menu-item--name"]').eq(1).click()
  addEmployeePageObject.cliquerSurPim();
  // cy.get('[href$="viewPimModule"]').click();
  // cy.get("a.oxd-topbar-body-nav-tab-item").contains("Add Employee").click();
});

Then("user redirects to Add Employee page", () => {
  // cy.url().should("includes", "pim/addEmployee");
  addEmployeePageObject.verifierUrl();
});

When("remplir les champs obligatoires et clicker sur save", (datatable) => {
  datatable.hashes().forEach((element) => {
    // cy.get('[name="firstName"]').type(element.First_Name); //enlever les espace
    // cy.get('[name="middleName"]').type(element.Middle_Name);
    // cy.get('[name="lastName"]').type(element.Last_Name);
    // cy.intercept('GET','https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees').as('waitforemployee')
    // cy.get('[type="submit"]').should("be.enabled").click({ force: true });
    // cy.wait('@waitforemployee',{timeout:10000}).its('response.statusCode').should('eq',200)
    addEmployeePageObject.remplirChampsObligatoire(element.First_Name, element.Middle_Name, element.Last_Name);
  });
});
