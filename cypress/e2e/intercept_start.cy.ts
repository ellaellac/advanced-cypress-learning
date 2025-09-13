it('board has no lists', () => {
  // handling false positive
  cy.intercept('GET', '/api/lists?boardId=1').as('getLists')
// intercept command : wait for a certain API call to be made and wait for its response
  cy.visit('/board/1')

  cy.wait('@getLists')

  cy.get('[data-cy=list]')
    .should('not.exist')
  
});

it('deleting a list', () => {
  // put the intercept before API call 
  cy.intercept({ 
    method: 'DELETE',
    url: '/api/lists/1',  // url: '/api/lists/*'
  }).as('deleteList')

  cy.visit('/board/1')

  cy.get('[data-testid="list-options"]')
    .click()

  cy.get('[data-testid="delete-list"]')
    .click()

  cy.wait('@deleteList') // return a object of the API call
    .its('response.statusCode')
    .should('eq', 200)
});