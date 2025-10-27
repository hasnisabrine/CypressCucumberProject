class addEmployeePageObject {
  firstNameInput = '[name="firstName"]';
  cliquerSurPim() {
    cy.get('[href$="viewPimModule"]').click();
    cy.get("a.oxd-topbar-body-nav-tab-item").contains("Add Employee").click();
  }
  verifierUrl() {
    cy.url().should("includes", "pim/addEmployee");
  }
  remplirChampsObligatoire(firstname, midleName, lastName) {
    cy.get(this.firstNameInput).type(firstname); //enlever les espace
    cy.get('[name="middleName"]').type(midleName);
    cy.get('[name="lastName"]').type(lastName);
    cy.intercept("GET", "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees").as("waitforemployee");
    cy.get('[type="submit"]').should("be.enabled").click({ force: true });
    cy.wait("@waitforemployee", { timeout: 10000 }).its("response.statusCode").should("eq", 200);
  }
}
export default new addEmployeePageObject();
