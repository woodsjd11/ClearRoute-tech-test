const { readFile, writeFile } = require("node:fs/promises");

const filterCustomers = async (minAge, maxAge) => {
    readFile("latest-customers.txt", "utf-8")
    .then((data) => {
      //seperate customers
      const allCustomers = data.split("\n");
      //obtain customers filtered by age range
      const customerByAgeRange = allCustomers.filter((customer) => {
        //obtain age string of customer and convert to number
        const age = +customer.match(/\d{1,2}/);
        return age >= minAge && age <= maxAge;
      });
      return customerByAgeRange;
    })
    .then((customers) => {
      const formattedCustomers = [];
      customers.forEach((customer) => {
        //regex for finding specific details
        const phone = customer.match(/\(*\d{3,}\)*\s\d+\s*\d*/);
        const email = customer.match(/\w+@.*/);
        const name = customer.match(/\w+\s\w*/i);
        formattedCustomers.push([name[0], phone[0], email[0]]);
      });
      writeFile("filtered-customers.txt", formattedCustomers.join(",\n"));
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {filterCustomers}