describe(`jornadas do usuario`, () => {

  it(`Deve permitir o usuário acessar a aplicação, realizar uma transação e então fazer logout`, () => {
    cy.visit(`/`)

    cy.login()

    cy.get('[data-test="select-opcoes"]').select('Transferência')

    cy.get('[data-test="form-input"]').type('80')

    cy.getByData('realiza-transacao').click()

    cy.get('[data-test="lista-transacoes"]').find('li').last().contains('- R$ 80')


    cy.get('[data-test="botao-sair"]').click()


    cy.location('pathname').should('eq', '/')

  })
})