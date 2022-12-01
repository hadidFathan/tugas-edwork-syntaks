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
    cy.login()
   });
   it('Should Try to bils', () =>{
    cy.get('#pay_bills_tab').click()
    cy.login()
    cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
    cy.get('#sp_amount').type('15000').should('have.value', '15000')

    cy.get('#sp_description').type('Liburan akhir taun').should('have.value', 'Liburan akhir taun')
   });
  
   
   });