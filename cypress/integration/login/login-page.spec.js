describe('Login Page', () => {
  it('the page loads', () => {
    cy.visit('http://localhost:3000/log-in')
  })

  // beforeEach( () => {
  //   cy.visit('http://localhost:3000/log-in')
  // })

  context('Login form submission', () => {
    it('submits when fields are filled in', () => {
      cy.get("[type='email']")
        .type('alice@mail.com')
      cy.get("[type='password']")
        .type('Password1!')
        .type('{enter}')
        .should(() => {
          expect(localStorage.getItem('currentUser')).to.exist
          expect(localStorage.getItem('token')).to.exist
        })
      cy.wait(2000)
    })

    context('sign out process', () => {
      it('signs out and redirects to landing page', () => {
        cy.get('.sc-bYSBpT').click()
        cy.get('.sc-ipXKqB').click()
        cy.get('ul')
          .children('li')
          .eq(1) 
          .click().should(() => {
            expect(localStorage.getItem('currentUser')).to.be.null
            expect(localStorage.getItem('token')).to.be.null
          })
      })
    })
  })
})