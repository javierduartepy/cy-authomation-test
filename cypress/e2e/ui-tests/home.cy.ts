import { Login } from "../../interfaces";
import { HomePage, LoginPage } from "../../page-models";

describe("Testing de la pagina de Inicio", () => {
  const homePage = new HomePage();
  let loginData: Login;
  before(() => {
    cy.fixture<Login>("loginData.json").then((user) => {
      loginData = user;
    });
  });

  it("Verificar que funcione el boton de perfil de usuario", () => {
    cy.login(loginData.user, loginData.password);
    homePage.profileButton().should("be.visible").click();
  });

  it("Verificar que funcione el boton de perfil de usuario", () => {
    cy.login(loginData.user, loginData.password);
    homePage.profileButton().click();
    homePage.usernameLabel().should("contain.text", loginData.user);
  });
});
