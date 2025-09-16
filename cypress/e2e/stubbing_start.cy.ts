it.only('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  }, { //stubbing a repsonse
    body:[
    {      
      created: "2025-09-01",
      name: "Testing",
      starred: true,
      id: 2,
      user: 0
    }]   
  }).as('boardList')

  cy.visit('/');

})

it('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  })
    .as('boardCreate')

  cy.visit('/');

  cy.get('[data-cy=create-board]')
    .click()

  cy.get('[data-cy=new-board-input]')
    .type('garden project{enter}')

})