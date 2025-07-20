import { Login } from "../interfaces";

export class LoginPage {
  private waitForElement: any = { timeout: 60000 };
  navigateToLogin() {
    const url = Cypress.env("host");
    cy.visit(`${url}/ingresosvillaangela/servlet/com.ecom.gamexamplelogin`);
  }

  navigateToHome() {
    const url = Cypress.env("host");
    cy.visit(`${url}/ingresosvillaangela/servlet/com.ecom.wwpbaseobjects.home`);
  }

  doLogin(user: Login) {
    cy.session([`Usuario Logeado: ${user.user}`], () => {
      this.navigateToLogin();
      cy.wait(2000);
      this.usernameTxt().type(user.user, { delay: 100 });
      this.passwordTxt().type(user.password, { delay: 100 });
      this.loginButton().click();
      cy.wait(2000);
    });
  }

  loginLogo() {
    return cy.get("#LOGOLOGIN");
  }

  loginButton() {
    return cy.get("#BTNENTER");
  }
  usernameTxt() {
    return cy.get("#vUSERNAME", this.waitForElement);
  }

  passwordTxt() {
    return cy.get("#vUSERPASSWORD", this.waitForElement);
  }

  forgotPasswordLink() {
    return cy.get("#FORGOTPASSWORD > a");
  }

  loginMessage() {
    return cy.get("#TABLELOGINERROR > div > div > div > span > div");
  }

  errorMessage() {
    return cy.xpath(`//*[text()="Incorrect username or password"]`);
  }
}

//  login(username: string, password: string) {
//    cy.log(`Logging in with username: ${username}`);
//    cy.session([`Usuario Logeado: ${username}`], () => {
//      this.navigateToLogin();
//      cy.wait(1000);
//      this.usernameTxt().type(username, { delay: 100 });
//      this.passwordTxt().type(password, { delay: 100 });
//      this.loginButton().click();
//    });
//  }
