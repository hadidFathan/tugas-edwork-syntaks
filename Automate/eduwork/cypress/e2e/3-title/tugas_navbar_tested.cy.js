/// <reference types="cypress" />


describe('Navbar And Login/Logout Test', () => {
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
    
    it('Should Try to login with Link visit', () => {
        cy.url().should('include', 'zero.webappsecurity.com')
        cy.get('#signin_button').click()
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

    it('Should  login to application with valid data', () => {
        cy.login()
        cy.get('h2').should('contain.text', 'Cash Accounts')
        cy.wait(5000)
    })
    it('Should login to display Account Activity content', () => {
        cy.contains('Account Activity').click()
        cy.login()
        cy.url().should('include', 'account-activity.html')
        cy.get('h2').should('contain.text', 'Show Transactions')
        cy.wait(5000)
    })
    it('Should login to display Transfer money content', () => {
        cy.contains('Transfer Funds').click()
        cy.login()
        cy.url().should('include', 'transfer-funds.html')
        cy.get('h2').should('contain.text', 'Transfer Money & Make Payments')
        cy.wait(5000)
    })
    it('Should login to display Payment BIls content', () => {
        cy.contains('Pay Bills').click()
        cy.login()
        cy.url().should('include', 'pay-bills.html')
        cy.get('h2').should('contain.text', 'Make payments to your saved payees')
        cy.wait(5000)
    })
    it('Should logout from the application', () => {
        cy.logout()
        cy.url().should('include', 'index.html')
        cy.wait(5000)     
    })
    })

    
    
    