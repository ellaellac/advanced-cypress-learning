it('loads a list of boards from fixture', () => {

  cy.intercept({
    method: 'GET', 
    url: '/api/boards'
  }, {  //stub with fixture
    fixture: 'twoBoards.json'
  }   
  ).as('boardList')

  cy.visit('/');

})

it.only('shows an error message when creating a board', () => {

  cy.intercept({
    method: 'POST', 
    url: '/api/boards'
  },{
    statusCode:500
  })
    .as('boardCreate')
  
  cy.visit('/');  //visit home page
  
  cy.get('[data-testid=create-board]') //create a new board and click
    .click()
  
  cy.get('[data-testid=new-board-input]') //type name of the board
    .type('garden project{enter}')

  cy.get('[data-testid="notification-message"]')
    .should('be.visible')

})