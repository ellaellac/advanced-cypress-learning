export {}
declare global{
  namespace Cypress{
    /**
     * Get a DOM element based on input text
     * @param input text value
     * @example
     * // this command
     * cy.getTestId('target element')
     * // will select element :
     * cy.get([data-testid="target element"]) 
     */
    interface Chainable{
      getTestId(input:string): Chainable<any>
    }
  }
}

Cypress.Commands.add('getTestId', (input: string) =>{

  Cypress.log({
    displayName: 'getTestId', 
    message: input,
    consoleProps() {
      return {
        selector: input
      }
    }
  })
  cy.get(`[data-testid="${input}"]`, {log:false})

})