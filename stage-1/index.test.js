const { readFileSync } = require("fs");
const { filterCustomers } = require("./index");

describe("filterCustomers", () => {
  it("should write a new file", () => {
    filterCustomers(40, 59);
    const file = `${__dirname}/filtered-customers.txt`;
    const fileContents = readFileSync(file, "utf-8", (err, data) => {
      return data;
    });
    expect(fileContents).not.toBe(null);
  });
});
