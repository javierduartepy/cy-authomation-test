import { Login } from "../../interfaces";
import { HomePage, LoginPage } from "../../page-models";
const loginPage = new LoginPage();
const homePage = new HomePage();

let loginData: Login;
before(() => {});

beforeEach(() => {
  cy.fixture<Login>("loginData.json").then((user) => {
    loginData = user;
    loginPage.doLogin(loginData);
    homePage.navigateToHome();
  });
});

describe("Testing de la pagina de Inicio", { tags: ["regression"] }, () => {
  it("Verificar que exista el boton de perfil de usuario", () => {
    homePage.profileButton().should("be.visible").click();
  });

  it("Verificar que funcione el boton de perfil de usuario", () => {
    homePage.profileButton().click();
    homePage.usernameLabel().should("contain.text", loginData.user);
  });
});
