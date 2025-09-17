/// <reference types="cypress" />

Cypress.Commands.add('login', () => {
  //create a new session 
    cy.session('user2', () => { //(name of the session , function contains login cmd)
      // run login cmd and save browser data/ cookies / local storage 
      //instead of logging in every test
      cy.visit('/login')

      cy.get('[data-testid="login-email"]')
        .type('filip@filiphric.sk')
      
      cy.get('[data-testid="login-password"]')
        .type('Asdf.1234#')
  
      cy.get('[data-testid="login-submit"]')
        .click()
  
      cy.location('pathname')
        .should('eq', '/')

    }, {
      cacheAcrossSpecs: true, //session available to all test specs
      validate() { // check if the auth is still valid ; if not it'd run the login cmd again
        cy.getCookie('auth_token')
          .its('value')
          .then( token => {
            cy.request({
              url: '/api/users/1',
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
          })
      }
    })

})



it('Logged in user sees private board', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-testid=board-item]')
    .should('be.visible')
  
});

it('Opens the private board', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-testid=board-item]')
    .click()

})

it('Logs out logged in user', () => {

  cy.login()

  cy.visit('/')

  cy.get('[data-testid="logged-user"]')
    .click()

  cy.contains('Get started!')
    .should('be.visible')

})