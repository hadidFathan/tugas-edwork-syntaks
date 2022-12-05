/// <reference types="cypress" />


describe('Navbar Test', () => {
    before(() => {
        cy.visit('/')
        cy.url().should('include', 'zero.webappsecurity.com')
        cy.wait(5000) 
      })
    it('Should DIsplay online banking content', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
        cy.get('h1').should('be.visible')
        cy.wait(5000)
    })
    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
        cy.wait(5000)
        
    })
    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
        cy.wait(5000)
        
    })
    })