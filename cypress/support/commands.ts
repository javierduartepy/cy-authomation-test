import { HomePage, LoginPage } from "../page-models";

Cypress.Commands.add("login", (username: string, password: string) => {
  const loginPage = new LoginPage();
  loginPage.navigateToLogin();
  cy.wait(1000);
  loginPage.usernameTxt().type(username, { delay: 100 });
  loginPage.passwordTxt().type(password, { delay: 100 });
  loginPage.loginButton().click();
});

Cypress.Commands.add("irSolicitarTurnos", () => {
  const homePage = new HomePage();
  homePage.navigateToHome();
});

declare global {
  namespace Cypress {
    interface Chainable {
      login(email: string, password: string): Chainable<void>;
      irSolicitarTurnos(): Chainable<void>;
    }
  }
}

// Cypress.Commands.add("getAccessToken", (email: string, password: string) => {
//   const url = Cypress.env("api");
//   return cy
//     .api({
//       method: "POST",
//       url: `${url}/login/password`,
//       body: {
//         username: email,
//         password: password,
//       },
//     })
//     .then((response) => {
//       return response.body.tokenAccess as string;
//     });
// });

// Cypress.Commands.add("getAllUser", () => {
//   const url = Cypress.env("api");
//   cy.api({
//     method: "GET",
//     url: `${url}/posts`,
//     headers: {
//       Accept: "application/json",
//     },
//   }).then((response) => {
//     return response;
//   });
// });

// ***********************************************
// This example commands.ts shows you how to
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
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
