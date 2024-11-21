describe('testando o mobile', () => {
  it('deve ter menu burger', () => {

    //cy.viewport(550, 750) // Configura o tamanho da janela para 550px x 750px
    cy.viewport('iphone-6') // Configura o tamanho da janela para 375px x 667px

    cy.visit('/')

    cy.login()


    cy.getByData('menu-burguer').click()

    cy.getByData('menu-lateral').find('a').eq(3).click()


    cy.location('pathname').should('eq', '/home/investimentos')


  })
})

describe.only('teste navegação', () => {
  context('desktop', () => {

    beforeEach(() => {
      // Roda os testes como se fossem em um monitor de 720p de resolução
      cy.viewport(1280, 720)
      cy.visit('/')
    })

    it('o usuario Não deve ver o menu de hamburger na home', () => {
      cy.login()
      cy.getByData('menu-burguer').should('not.be.visible' )
    })

    // seu teste aqui
  })


  it('mobile - o usuario DEVE ver o menu de hamburger na home',  () => {
    cy.viewport('iphone-6')
    cy.visit('/')

    cy.login()

    cy.getByData('menu-burguer').should('be.visible')
  })
})
