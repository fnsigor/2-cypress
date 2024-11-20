describe('template spec', () => {
  
  beforeEach(() => {
    cy.visit('/')
  })

  it('passes', () => {
    cy.getByData("titulo-principal").contains('Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!')
  })
})