const { readFile, writeFile } = require("node:fs/promises");

const filterCustomers = async (minAge, maxAge) => {
  writeFile("filtered-customers.txt", "testing");
};

module.exports = {filterCustomers}