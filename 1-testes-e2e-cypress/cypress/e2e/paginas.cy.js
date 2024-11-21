describe(`testando multiplas paginas`, () => {
  it(`deve conseguir acessar a pagina de cartoes`, () => {
    cy.visit(`/`)

    cy.getByData(`botao-login`).click()
   
    cy.getByData('email-input').type('iaswsaaaaaagor@email.com')
    cy.getByData('senha-input').type('456789')

    cy.getByData('botao-enviar').click()


    cy.location(`pathname`).should(`eq`, `/home`)
    
   cy.getByData('app-home').find(`a`).eq(1).click()

   cy.getByData('titulo-cartoes').should(`exist`).and(`have.text`, `Meus cartões`)

   cy.location(`pathname`).should(`eq`, `/home/cartoes`)
  })


  it.only('usuario faz cadastro > faz login : é redirecionado pra home', () => {
    cy.getByData('botao-cadastro').click()
    
    cy.getByData('nome-input').type('novouser')
    cy.getByData('email-input').type('novouser@email.com')
    cy.getByData('senha-input').type('456789')  
    
    cy.getByData('botao-enviar').click()

    cy.getByData('mensagem-sucesso').should('exist').and('have.text','Usuário cadastrado com sucesso!')


    cy.getByData(`botao-login`).click()

  cy.getByData('email-input').type('novouser@email.com')
  cy.getByData('senha-input').type('456789')

  cy.getByData('botao-enviar').click()

  cy.location(`pathname`).should(`eq`, `/home`)
  })
})