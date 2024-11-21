Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`)
})

Cypress.Commands.add('getElementBySelectorAndText', (selector, text) => {
  return cy.get(selector).should('have.text', text)
})
Cypress.Commands.add('login', (selector, text) => {
  cy.getByData(`botao-login`).click()

  cy.getByData('email-input').type('iaswsaaaaaagor@email.com')
  cy.getByData('senha-input').type('456789')

  cy.getByData('botao-enviar').click()

  cy.location(`pathname`).should(`eq`, `/home`)

  return cy.getByData('app-home')


})
