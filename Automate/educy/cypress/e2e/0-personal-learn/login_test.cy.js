/// <reference types="cypress" />

describe('Working with input', () => {
    it('visit to website', () => {
       cy.visit('http://zero.webappsecurity.com/login.html')
       cy.url().should('include', 'login.html')
       });
   it('Should fill username', () =>{
    cy.get('#user_login').clear()
    cy.get('#user_login').type('username')
   });
   it('Should fill password', () =>{
    cy.get('#user_password').clear()
    cy.get('#user_password').type('password') 
   });


   });