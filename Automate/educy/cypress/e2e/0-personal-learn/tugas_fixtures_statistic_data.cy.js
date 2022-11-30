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
    cy.fixture('saucedemo').then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username)
        cy.get('#password').clear()
        cy.get('#password').type(password) 
        cy.contains('Login').click()
        //cy.get('.error').should('contain.text', 'Epic sadface: Sorry, this user has been locked out.')
    })
   });
   it('Should fill add chart', () =>{
    cy.get('#add-to-cart-sauce-labs-backpack').click()
    cy.get('#add-to-cart-sauce-labs-bike-light').click()
    cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
    
   });
   
   });