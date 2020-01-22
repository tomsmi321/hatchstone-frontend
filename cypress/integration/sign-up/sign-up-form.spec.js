describe('Sign up form', () => {
  it('the page loads', () => {
    cy.visit('http://localhost:3000/sign-up')
  })

  beforeEach( () => {
    cy.visit('http://localhost:3000/sign-up')
  })

  context('Form submission', () => {
    it('submits when fields are filled in', () => {
      cy.get("[type='email']")
        .type(randomEmail())
      cy.get("[type='password']")
        .type('Password1!')
        .type('{enter}')
    })
  })
})

const randomEmail = () => {
  let dummyEmail = 'dummy@mail.com'
  let randomText = ''
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < 10; i++) {
    randomText += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return randomText + dummyEmail
}