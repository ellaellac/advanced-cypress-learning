it('resets a database', () => {

  // cy.task('seedDatabase', {
  //   boards:[],
  //   cards: [],
  //   lists: [],
  //   users: []
  // })

  //Ref to seedDatabase.js
  cy.task('seedDatabase', { //arg : needs to be an object or a single parameter
    boards: [{
      name: 'My first board',
      id: 1,
      starred: true,
      user: 0,
      created: '2025-09-10'
    }],
    cards: [{boardId: 1, name: "card", order: 0}],
    lists: [{boardId: 1, name: "first list", order: 1}],
    users: []
  })

  cy.visit('/')
  
});