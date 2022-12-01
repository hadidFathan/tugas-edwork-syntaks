/// <reference types="cypress" />

describe('Working with input', () => {
    it('visit to website', () => {
       cy.visit('http://www.saucedemo.com')
       cy.url().should('include', 'www.saucedemo.com')
       });
       it('Should fill username', () =>{
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
       }); 
       it('Should fill password', () =>{
        cy.get('#password').clear()
        cy.get('#password').type('password')
       });
    it('Should Try to login', () =>{
   cy.logins()
   });
    
   it('Should fill add chart', () =>{
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#shopping_cart_container').click()
   });
   it('Should Try to cart and input check out, And Finish', () =>{
    cy.logins()
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    cy.get('#shopping_cart_container').click()
    cy.get('#checkout').click()
    cy.get('#first-name').type('Ralph').should('have.value', 'Ralph')
    cy.get('#last-name').type('ruhia').should('have.value', 'ruhia')
    cy.get('#postal-code').type('8979').should('have.value', '8979')
    cy.get('#continue').click()
    cy.get('#finish').click()
    });
   
   });