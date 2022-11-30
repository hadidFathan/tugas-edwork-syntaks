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
   it('Should fill remember me', () =>{
    cy.get('#user_remember_me').click()
   });
   it('Should Try to login', () =>{
    cy.fixture('user').then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)
        cy.get('#user_password').clear()
        cy.get('#user_password').type(password) 
        cy.contains('Sign in').click()
        cy.get('.alert-error').should('have.text', 'Login and/or password are wrong.')
    })
   });
   });