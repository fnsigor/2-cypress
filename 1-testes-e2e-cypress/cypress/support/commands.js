Cypress.Commands.add('getByData', (seletor) => {
  return cy.get(`[data-test=${seletor}]`)
})

Cypress.Commands.add('getElementBySelectorAndText', (selector, text) => {
  return cy.get(selector).should('have.text', text)
})
