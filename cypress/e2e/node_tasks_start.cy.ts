it('resets a database', () => {

  cy.task('seedDatabase', {
    boards: [], 
    cards: [], 
    lists: [], 
    users: []
  })

  cy.visit('/')
  
});