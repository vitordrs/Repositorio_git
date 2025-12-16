describe('agenda contatos', () =>{
    beforeEach(() => {
        cy.visit('https://ebac-agenda-contatos-tan.vercel.app/')
    })

    it('Deve incluir um novo contato', () => {
        cy.get('[type="text"]').type('Vitor')
        cy.get('[type="email"]').type('Vitor@cypress.com')
        cy.get('[type="tel"]').type('41 991052908')
        cy.get('.adicionar').click()
        cy.screenshot('01-inclusao-contato')
    })

    it('Deve alterar um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Vitor')
        cy.get('[type="tel"]').type('41 991052908')
        cy.screenshot('02-alteracao-contato')
        cy.get('.alterar').click()
        cy.screenshot('03-contato-alterado')
    })

    it('Deve iniciar uma alteração, porem ira cancela-la', () => {
        cy.get(':nth-child(3) > .sc-gueYoa > .edit').click()
        cy.get('[type="text"]').type('Vitor')
        cy.get('[type="tel"]').type('41 991052908')
        cy.screenshot('04-cancelamento-alteracao')
        cy.get('.cancelar').click()
    })

    it('Deve remoever um contato', () => {
        cy.get(':nth-child(2) > .sc-gueYoa > .delete')
        cy.screenshot('04-remocao-contato')
    })
})