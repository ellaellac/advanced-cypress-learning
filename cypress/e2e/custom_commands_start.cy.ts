it.only('creates new list and a new card', () => {

  cy.visit(`/board/1`)

  cy.getTestId("add-list-input")
    .type('Groceries{enter}')

  cy.getTestId("new-card")
    .click()

  cy.getTestId("new-card-input")
    .type('milk{enter}')
  
});