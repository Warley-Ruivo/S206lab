describe('template spec', () => {
  it.skip('acesso ao site', () => {
    cy.visit('https://computer-database.gatling.io/computers')
  })

  it('Adicionando computador', () => {

    addComp("Wey-speed","2024-06-10","2024-07-18","RCA")

  })

  it('Salvando computador', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
    cy.get('.primary').click()
  })

  it('Salvando computador', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('tbody > :nth-child(2) > :nth-child(1) > a').click()
    cy.get('.primary').click()
  })

  it('Pesquisando computador', () => {
    cy.visit('https://computer-database.gatling.io/computers')
    cy.get('#searchbox').type("ACE")
    cy.get('#searchsubmit').click()
    cy.get('tbody > :nth-child(1) > :nth-child(1) > a').click()
  })

})

function addComp(name, idate, fdate, company) {
  cy.visit('https://computer-database.gatling.io/computers')
  cy.get('#add').click()
  cy.get('#name').type(name)
  cy.get('#introduced').type(idate)
  cy.get('#discontinued').type(fdate)
  cy.get('#company').select(company)
  cy.get('.primary').click()
  cy.get('.alert-message').should('have.text', "Done ! Computer Wey-speed has been created")
}