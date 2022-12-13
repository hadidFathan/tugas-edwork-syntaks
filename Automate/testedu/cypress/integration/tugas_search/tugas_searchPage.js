const URL = 'http://zero.webappsecurity.com'
const search = 'online {enter}'
const h2 = 'Search Results:'

class tugas_searchPage{
    static visit() {
        cy.visit(URL)
        cy.url().should('include', 'zero.webappsecurity.com')
    }
    static search() {
        cy.get('#searchTerm').type('online {enter}')
        cy.wait(5000) 
    }
    static h2() {
        cy.get('h2').contains('Search Results:')
        cy.wait(5000)
    }
    
 }
 export default tugas_searchPage