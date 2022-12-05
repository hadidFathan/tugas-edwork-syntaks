/// <reference types="cypress" />


describe('Searchbox Test', () => {
    before(() => {
        cy.visit('/')
      })
    it('Should type into searchbox and submit', () => {
        cy.get('#searchTerm').type('some text {enter}')
        cy.wait(5000) 
    })
    it('Should show search result page', () => {
        cy.get('h2').contains('Search Results:')
        cy.wait(5000)
    })
    })