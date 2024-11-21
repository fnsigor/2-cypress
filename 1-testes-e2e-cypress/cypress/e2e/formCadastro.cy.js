describe('form cadastro', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('usuario deve conseguir se cadastrar com sucesso', () => {
    cy.getByData('botao-cadastro').click()
    
    cy.getByData('nome-input').type('Iaasqsaagor')
    cy.getByData('email-input').type('iaswsaaaaaagor@email.com')
    cy.getByData('senha-input').type('456789')  
    
    cy.getByData('botao-enviar').click()

    cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')
  })


  it.only(`usuario deve receber erro ao tentar se cadastrar com email ja existente`, () => {
    cy.getByData('botao-cadastro').click()

    cy.getByData('nome-input').type('Iaasqsaagor')
    cy.getByData('email-input').type('iaswsaaagor@email.com')
    cy.getByData('senha-input').type('456789')  
    
    cy.getByData('botao-enviar').click()

    cy.contains(`E-mail já cadastrado!`)
  })
})