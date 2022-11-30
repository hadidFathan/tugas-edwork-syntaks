/// <reference types="cypress" />

describe('Browser Action', () => {
    it('Should load correct url', () => {
       cy.visit('https://books.toscrape.com/index.html', { timeout: 30000 })
       cy.url().should('include', 'index.html')
       });

       it ('Should check for corect element on the page', () => {
        cy.get('a').contains('Travel').click()
        cy.get('h1').should('have.text', 'Travel')
    });
   });