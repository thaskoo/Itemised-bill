var assert = require("assert");
var readCSV = require("../modules/readCSV");

describe('read the CSV file', function(){
  it('get the content from the csv file', function(done){
assert.equal(readCSV.readCsv("./ItemisedBill.csv").length, 35);
// console.log(readCSV.readCsv);
    done();
  });
});
