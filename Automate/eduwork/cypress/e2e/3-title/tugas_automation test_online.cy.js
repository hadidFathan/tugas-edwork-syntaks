/// <reference types="cypress" />


describe('Searchbox Test', () => {
    before(() => {
        cy.visit('/')
        cy.url().should('include', 'zero.webappsecurity.com')
      })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('online {enter}')
        cy.wait(5000) 
    })
    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
        cy.wait(5000)
    })
    })