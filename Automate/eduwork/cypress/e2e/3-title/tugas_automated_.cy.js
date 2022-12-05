/// <reference types="cypress" />


describe('automate test Saucedemo fitur', () => {
    
    it('visit to website', () => {
        cy.visit('http://www.saucedemo.com')
        cy.url().should('include', 'www.saucedemo.com')
        });
        it('Should fill username', () =>{
            cy.get('#user-name').clear()
            cy.get('#user-name').type('username')
            cy.wait(5000)
           }); 
           it('Should fill password', () =>{
            cy.get('#password').clear()
            cy.get('#password').type('password')
            cy.contains('Login').click()
            cy.wait(5000)
           });
           it('Should display error message', () => {
            cy.get('.error').should('be.visible').and('contain.text' , 'Epic sadface: Username and password do not match any user in this service')
            cy.wait(5000)
        })
        it('Should  login to application with valid data account and data problem', () => {
            cy.logins()
            
            cy.wait(5000)
        })
        it('Should  login to application with valid data And add chart', () => {
            cy.logins1()
            cy.get('#add-to-cart-sauce-labs-backpack').click()
            cy.get('#add-to-cart-sauce-labs-bike-light').click()
            cy.get('#add-to-cart-sauce-labs-bolt-t-shirt').click()
            cy.get('#shopping_cart_container').click()
            cy.wait(5000)
        })
        it('Should Try to cart and input check out, and complite cart', () =>{
            cy.get('#checkout').click()
            cy.logins1()
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
            cy.get('#back-to-products').click()
            });
            it('Should logout from the application', () => {
                cy.get('.title').should('contain.text', 'Products')
                cy.get('.bm-burger-button').click()
                cy.get('#logout_sidebar_link').click()
                cy.wait(5000)     
            })
    })