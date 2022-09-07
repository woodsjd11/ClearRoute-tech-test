describe("start the test button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it('navigates to the test page', () => {
    cy.get('[href="/test"] button').click()
    cy.url().should('eq', 'http://localhost:3000/test')
  });
});

