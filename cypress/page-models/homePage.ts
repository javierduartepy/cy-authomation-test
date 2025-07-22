export class HomePage {
  private waitForElement: any = { timeout: 60000 };

  navigateToHome() {
      const url = Cypress.env("host");
      cy.visit(`${url}/ingresosvillaangela/servlet/com.ecom.wwpbaseobjects.home`);
    }

  pageTitle() {
    return cy.get("#TEXTBLOCKTITLE_MPAGE", this.waitForElement);
  }

  profileButton() {
    return cy.get("#DDO_ADMINAG_MPAGEContainer_btnGroupDrop");
  }

  usernameLabel() {
    return cy.get(
      "#DDO_ADMINAG_MPAGEContainer > ul > li:nth-child(1) > li > div > div.UserInfoNameCell > span"
    );
  }
}
