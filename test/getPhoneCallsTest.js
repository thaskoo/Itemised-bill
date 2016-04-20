var getPhoneCalls = require('../modules/getPhoneCalls');
var totalcallsmade = require('../modules/totalcallsmade');
var readCSV  = require("../modules/readCSV");
var assert = require("assert");

describe('Gets all phone calls from a given service provider', function(){
    it('returns list of phone calls from MTN', function (done) {
      var billmap = readCSV.readCsv("./ItemisedBill.csv");
      assert.equal(getPhoneCalls.getPhoneCalls(billmap, "MTN").length, 16);
      done();
    });
    it('returns list of phone calls from Vodacom', function (done) {
      var billmap = readCSV.readCsv("./ItemisedBill.csv");
    assert.equal(getPhoneCalls.getPhoneCalls(billmap, "Vodacom").length, 8);
     done();
   });

it('returns list of phone calls from CellC', function (done) {
    var billmap = readCSV.readCsv("./ItemisedBill.csv");
       assert.equal(getPhoneCalls.getPhoneCalls(billmap, "CellC").length, 11);
     done();
   });
 });
