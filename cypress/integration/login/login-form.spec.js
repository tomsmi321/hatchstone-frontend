describe('Login form', () => {
  it('the page loads', () => {
    cy.visit('http://localhost:3000/log-in')
  })

  beforeEach( () => {
    cy.visit('http://localhost:3000/log-in')
  })

  context('Form submission', () => {
    it('submits when fields are filled in', () => {
      cy.get("[type='email']")
        .type('alice@mail.com')
      cy.get("[type='password']")
        .type('Password1!')
        .type('{enter}')
    })
  })
})