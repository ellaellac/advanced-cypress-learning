it('sends a request over API', () => {
  //this purely send the API 
  cy.request('POST', '/api/boards', {
    name: 'create via cy.request()'
  })
  //this visit back the page
  cy.visit('/')

});

it('response gets 201 status', () => {
  cy.request('POST', '/api/boards',{
    name: 'created another board'
  }).its('status')
  .should('eq', 201)
});

it('testing board list', () => {
  cy.request({
    method: 'GET', 
    url: '/api/boards',
    headers: {
      accept: 'application/json' } // receive data in json format! 
  }).then( (response) => { // cy.request() yields response as an object: status / body/ headers/ duration
    expect(response.status).eq(200)
    expect(response.body[0].id).eq(1)
  }
  )
});

//resetting DB before all the tests using before hook
before('resetting database', () => {
  cy.request('POST', '/api/reset')
});