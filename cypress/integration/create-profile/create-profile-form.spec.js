describe('Create Profile Form', () => {

  beforeEach( () => {
    cy.visit('http://localhost:3000/sign-up')
    cy.get("[type='email']")
        .type(randomEmail())
    cy.get("[type='password']")
      .type('Password1!')
      .type('{enter}')
  })

  context('create profile form submission', () => {
    it('submits when fields are filled in', () => {
      cy.get("[name='firstName']")
        .type('dummy first name')
      cy.get("[name='lastName']")
        .type('dummy last name')
      cy.get("[name='address']")
        .type('dummy address')
      cy.get("[name='contactNumber']")
        .type('0400000000') 
      cy.get("[role='button']")
        .click()
      cy.get("[data-value='company']")
        .click()
      cy.get("[type='submit']")
        .click()
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