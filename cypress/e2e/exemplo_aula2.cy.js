/// <reference = cypress>

describe("teste de criação, registro e login", ()=>{
    it("Teste de usuario com sucesso", ()=>{
      cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
      cy.get('.btn-link').click()
      cy.get('#firstName').type("Warley")
      cy.get('#Text1').type("Ruivo")
      cy.get('#username').type("warley12")
      cy.get('#password').type("12345")
      cy.get('.btn-primary').click()
      cy.get('.ng-binding').should("contain.text","Registration successful")
    })
})

it("Teste de login com sucesso", ()=>{

    let infos = criarUser()

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('#username').type(infos[0])
    cy.get('#password').type(infos[0])
    cy.get('.btn-primary').click()
})

function criarUser(){

    let hora = new Date().getHours().toString()
    let minuto = new Date().getMinutes().toString()
    let segundo = new Date().getSeconds().toString()
    let ID = hora + minuto + segundo + "ID"
    let senha = hora + minuto + segundo + "senha"
    let infos = [ID,senha]

    cy.visit('https://globalsqa.com/angularJs-protractor/registration-login-example/#/login')
    cy.get('.btn-link').click()
    cy.get('#firstName').type(ID)
    cy.get('#Text1').type(ID)
    cy.get('#username').type(ID)
    cy.get('#password').type(senha)
    cy.get('.btn-primary').click()
    cy.get('.ng-binding').should("contain.text","Registration successful")

    return infos 
}