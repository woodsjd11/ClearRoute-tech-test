import findIndex from "../../challenge-function.js";

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
  it("should have 4 rows", () => {
    cy.get("tr").should("have.length", 4);
  });
  it("should have the expected numbers in each row", () => {
    cy.get('[testid="row-0"]')
      .find("td")
      .then((data) => {
        const cells = [...data];
        const rowContent = [];
        cells.forEach((cell) => {
          rowContent.push(+cell.innerText);
        });
        expect(rowContent).to.deep.equal([1, 2, 3, 4, 5, 6, 7, 8, 9]);
      });
    cy.get('[testid="row-1"]')
      .find("td")
      .then((data) => {
        const cells = [...data];
        const rowContent = [];
        cells.forEach((cell) => {
          rowContent.push(+cell.innerText);
        });
        expect(rowContent).to.deep.equal([23, 50, 63, 90, 10, 30, 155, 23, 18]);
      });
    cy.get('[testid="row-2"]')
      .find("td")
      .then((data) => {
        const cells = [...data];
        const rowContent = [];
        cells.forEach((cell) => {
          rowContent.push(+cell.innerText);
        });
        expect(rowContent).to.deep.equal([133, 60, 23, 92, 6, 7, 168, 16, 19]);
      });
    cy.get('[testid="row-3"]')
      .find("td")
      .then((data) => {
        const cells = [...data];
        const rowContent = [];
        cells.forEach((cell) => {
          rowContent.push(+cell.innerText);
        });
        expect(rowContent).to.deep.equal([30, 43, 29, 10, 50, 40, 99, 51, 12]);
      });
  });
});

describe("findInteger function", () => {
  it("returns the correct index for a known example", () => {
    const numbers = [10, 15, 5, 7, 1, 24, 36, 2];
    const result = findIndex(numbers);
    expect(result).to.equal(5);
  });
  it("returns null when no index can be found", ()=>{
    const numbers = [2,2,2,2];
    const result = findIndex(numbers);
    expect(result).to.equal(null);
  })
});
