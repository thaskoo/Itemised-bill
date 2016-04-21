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

describe('calculate number of calls for each network provider', function() {

  it('return a list of calls from MTN', function(done) {
    var billmap = readCSV.readCsv("./ItemisedBill.csv");
     var results = {
       '0832401145': 5,
       '0838758090': 5,
       '0831239023': 3,
       '0832004576': 1,
       '0837351200': 1,
       '0834590001': 1
     }
    assert.equal(totalcallsmade.FindtotalCalls(billmap, "MTN"), results);
    done();
  });
});
