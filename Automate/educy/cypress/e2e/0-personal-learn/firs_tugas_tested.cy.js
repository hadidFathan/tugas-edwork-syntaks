/// <reference types="cypress" />
describe('my First Test', () => {
    it('Visits the Kitchen Sink', () => {
       cy.visit('https://example.cypress.io/')
       //cy.pause()
       cy.contains('type').click()
       cy.url().should('include', '/commands/actions')
       cy.get('.action-email')
       .type('sieghartmchdol@gmail.com')
       .should('have.value', 'sieghartmchdol@gmail.com')
    });
   });