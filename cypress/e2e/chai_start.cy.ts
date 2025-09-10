it('check text of all cards in first list', () => {

  cy.visit('/board/1')

  cy.get('[data-testid="card-text"]')
    .should((cards)=>{
      expect(cards[0]).to.have.text('Milk')
      expect(cards[1]).to.have.text('Bread')
      expect(cards[2]).to.have.text('Juice')
    })
});

//Notes:
//.then() vs.should() :

//.then() command: 
// Executes immediately with whatever the previous command has returned. 
// It does not retry. This can lead to flaky tests in APP
// where elements might briefly appear in the wrong order or are not fully loaded.

//.should() command: 
// Is a built-in assertion wrapper that retries for a few seconds (default : 4 sec) 
// until the condition is met.
// Tests less prone to flakiness caused by timing issues or slight re-renders.