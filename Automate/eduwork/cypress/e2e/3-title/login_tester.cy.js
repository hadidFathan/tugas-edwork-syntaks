/// <reference types="cypress" />


describe('Login/Logout  Test', () => {
    before(() => {
        cy.visit('/')
        cy.url().should('include', 'zero.webappsecurity.com')
        cy.get('#signin_button').click()
        cy.wait(5000) 
      })
    it('Should Try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('#user_remember_me').click()
        cy.contains('Sign in').click()
        cy.wait(5000)
    })
    it('Should display error message', () => {
        cy.get('.alert-error').should('be.visible').and('contain' , 'Login and/or password are wrong.')
        cy.wait(5000)
        
    })
    it('Should  login to appication with valid data', () => {
        cy.login()
        cy.get('h2').should('contain.text', 'Cash Accounts')
        cy.wait(5000)
    })
    it('Should logout from the application', () => {
        cy.logout()
        cy.wait(5000)
        
    })
    })