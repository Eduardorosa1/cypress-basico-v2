Cypress.Commands.add('fillMandatoryFieldsAndSubmit', function () {
    cy.get('#firstName').type('joao')
    cy.get('#lastName').type('silva')
    cy.get('#email').type('exemplo@test.com')
    cy.get('#open-text-area').type("teste")
    cy.contains('button', 'Enviar').click()
    cy.get('.success').should('be.visible')
})