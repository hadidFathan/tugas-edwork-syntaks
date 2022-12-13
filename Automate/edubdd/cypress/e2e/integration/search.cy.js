/// <reference types="cypress"/>
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
Given('I Click Search', () => {
   cy.visit('http://zero.webappsecurity.com/login.html')
   cy.url().should('include', 'zero.webappsecurity.com')
})
When('Input Online in Search table', () => {
    cy.get('#searchTerm').type('online {enter}')
    cy.wait(5000) 
})
Then('I should see my search in page', () => {
    cy.get('h2').contains('Search Results:')
    cy.wait(5000)
})

