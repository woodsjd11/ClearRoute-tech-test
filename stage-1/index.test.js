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
  it("should return the correct amount of customers within the 40-59 age range", () => {
    filterCustomers(40, 59);
    const file = `${__dirname}/filtered-customers.txt`;
    const fileContents = readFileSync(file, "utf-8", (err, data) => {
      return data;
    });
    const lineCount = fileContents.split("\n").length;
    expect(lineCount).toEqual(13);
  });
  describe("Edge Cases - should return correct name, phone number, and email address for the following:", () => {
    test("most basic instance - home address with no commas, phone number without brackets", () => {
      filterCustomers(40, 59);
      const file = `${__dirname}/filtered-customers.txt`;
      const fileContents = readFileSync(file, "utf-8", (err, data) => {
        return data;
      });
      const customer = "Otto Hunter,0908 260 7332,tincidunt@hotmail.ca";
      expect(fileContents).toEqual(expect.stringContaining(customer));
    });
    test("instance - home address with commas, phone number without brackets", () => {
      filterCustomers(40, 59);
      const file = `${__dirname}/filtered-customers.txt`;
      const fileContents = readFileSync(file, "utf-8", (err, data) => {
        return data;
      });
      const customer = "Leandra Haynes,0800 225832,sapien@outlook.org";
      expect(fileContents).toEqual(expect.stringContaining(customer));
    });
    test("instance - home address with commas, phone number with brackets", () => {
      filterCustomers(40, 59);
      const file = `${__dirname}/filtered-customers.txt`;
      const fileContents = readFileSync(file, "utf-8", (err, data) => {
        return data;
      });
      const customer = "Yasir Willis,(013801) 50256,ipsum@outlook.edu";
      expect(fileContents).toEqual(expect.stringContaining(customer));
    });
  });
});
