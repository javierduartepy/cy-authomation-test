import { Login } from "../../interfaces";
import { LoginPage, HomePage } from "../../page-models";

describe("Testing de Login", () => {
  const loginPage = new LoginPage();
  const homePage = new HomePage();
  let loginData: Login;
  before(() => {
    cy.fixture<Login>("loginData.json").then((user) => {
      loginData = user;
    });
  });

  it("Verificar mensaje de usuario incorrecto", () => {
    cy.login(loginData.failUser, loginData.failPassword);
    loginPage
      .loginMessage()
      .should("contain.text", loginData.loginMessageIncorrect);
  });

  it("Login con exito y redireccion a la home page", () => {
    cy.login(loginData.user, loginData.password);
    homePage.pageTitle().should("contain.text", loginData.homeTitle);
  });
});
