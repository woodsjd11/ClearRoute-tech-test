describe("start the test button", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });
  it("navigates to the test page", () => {
    cy.get('[href="/test"] button').click();
    cy.url().should("eq", "http://localhost:3000/test");
  });
});

describe("integer table", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
    cy.get('[href="/test"] button').click();
  });
  it("displays one table by default ", () => {
    cy.get("table").should("have.length", 1);
  });
});
