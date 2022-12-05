// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


Cypress.Commands.add('login', (username, password) => {
    cy.fixture('user').then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user_login').clear()
        cy.get('#user_login').type(username)
        cy.get('#user_password').clear()
        cy.get('#user_password').type(password) 
        cy.get('input[name="submit"]').click()
    
    })
})
Cypress.Commands.add('logout', (username, password) => {
    cy.contains('username').click()
    cy.get('#logout_link').click()
})

Cypress.Commands.add('logins', (username, username1,  username2,  username3,  password) => {
    cy.clearCookies()
    cy.fixture('saucedemo').then(user => {
        const username = user.username
        const username1 = user.username1
        const username2 = user.username2
        const username3 = user.username3
        const password = user.password

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username)
        cy.get('#password').clear()
        cy.get('#password').type(password) 
        cy.contains('Login').click()
        cy.wait(5000)
        cy.get('.title').should('contain.text', 'Products')
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.wait(5000)
        cy.get('#user-name').clear()
        cy.get('#user-name').type(username1)
        cy.get('#password').clear()
        cy.get('#password').type(password)
        cy.contains('Login').click()
        cy.get('.error').should('be.visible').and('contain.text' , 'Epic sadface: Sorry, this user has been locked out.')
        cy.wait(5000)
        cy.get('#user-name').clear()
        cy.get('#user-name').type(username2)
        cy.get('#password').clear()
        cy.get('#password').type(password)
        cy.contains('Login').click()
        cy.get('.title').should('contain.text', 'Products')
        cy.wait(5000)
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
        cy.get('#user-name').clear()
        cy.get('#user-name').type(username3)
        cy.get('#password').clear()
        cy.get('#password').type(password)
        cy.contains('Login').click()
        cy.get('.title').should('contain.text', 'Products')
        cy.wait(5000)
        cy.get('.bm-burger-button').click()
        cy.get('#logout_sidebar_link').click()
    })
})

Cypress.Commands.add('logins1', (username, password) => {
    cy.clearCookies()
    cy.fixture('saucedemo').then(user => {
        const username = user.username
        const password = user.password

        cy.get('#user-name').clear()
        cy.get('#user-name').type(username)
        cy.get('#password').clear()
        cy.get('#password').type(password) 
        cy.contains('Login').click()
        cy.get('.title').should('contain.text', 'Products')
        
    })
})