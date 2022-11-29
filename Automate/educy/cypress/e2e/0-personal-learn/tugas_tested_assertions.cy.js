/// <reference types="cypress" />
describe('my First Test', () => {
    it('clicking "type" shows the right headings', () => {
       cy.visit('https://example.cypress.io/', { timeout: 10000})
       //cy.pause()
       cy.contains('type').click()
       cy.url().should('include', '/commands/actions')
       // element should check for correct element on the page
       cy.get('h1').should('be.visible')
       cy.get('.action-email')
       .type('sieghartmchdol@gmail.com')
       .should('have.value', 'sieghartmchdol@gmail.com')
    });
   });