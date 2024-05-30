/// <reference = cypress>

describe("Lista 1", ()=>{
  it ("criação de usuário com sucesso", ()=>{
    cy.visit('https://practice.automationtesting.in/')
    cy.get('#menu-icon').click()
    cy.get('#menu-item-50 > a').click()
    cy.get('#reg_email').type("user432@gmail.com")
    cy.get('#reg_password').type("Pass@3123#2222332")
    cy.get('input[name="register"]').should('not.be.disabled').click();
  })

it ("login  de usuário com sucesso", ()=>{
  cy.visit('https://practice.automationtesting.in/')
  cy.get('#menu-icon').click()
  cy.get('#menu-item-50 > a').click()
  cy.get('#username').type("user432@gmail.com")
  cy.get('#password').type("Pass@3123#2222332")
  cy.get(':nth-child(3) > .woocommerce-Button').click()
})

it("login ERRADO de usuário e senha incorreta com sucesso", ()=>{
  cy.visit('https://practice.automationtesting.in/')
  cy.get('#menu-icon').click()
  cy.get('#menu-item-50 > a').click()
  cy.get('#username').type("user32@gmail.com")
  cy.get('#password').type("Pass@13#2222332")
  cy.get(':nth-child(3) > .woocommerce-Button').click()
  cy.get('li').should('contain.text', 'Error: A user could not be found with this email address.');
})

it ("login ERRADO de usuário correto e senha incorreta com sucesso", ()=>{
  cy.visit('https://practice.automationtesting.in/')
  cy.get('#menu-icon').click()
  cy.get('#menu-item-50 > a').click()
  cy.get('#username').type("user2232@gmail.com")
  cy.get('#password').type("Pass@13#2222332")
  cy.get(':nth-child(3) > .woocommerce-Button').click()
})

it ("login  de usuário incorreto e senha correta com sucesso", ()=>{
  cy.visit('https://practice.automationtesting.in/')
  cy.get('#menu-icon').click()
  cy.get('#menu-item-50 > a').click()
  cy.get('#username').type("user2@gmail.com")
  cy.get('#password').type("Pass@123123#2222332")
  cy.get(':nth-child(3) > .woocommerce-Button').click()
})

it("login de usuário e senha vazios(com espaço) com sucesso", () => {
  cy.visit('https://practice.automationtesting.in/');
  cy.get('#menu-icon').click();
  cy.get('#menu-item-50 > a').click();
  cy.get('#username').type('  ');
  cy.get('#password').type('  ');
  cy.get(':nth-child(3) > .woocommerce-Button').click();
  cy.get('li').should('contain.text', 'Username is required.');
});

})