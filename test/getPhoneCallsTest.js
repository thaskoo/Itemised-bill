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

  it('return a list of calls from MTN', function() {
    var billmap = readCSV.readCsv("./ItemisedBill.csv");
     var results = {
       '0832401145': 5,
       '0838758090': 5,
       '0831239023': 3,
       '0832004576': 1,
       '0837351200': 1,
       '0834590001': 1
     }
    assert.deepEqual(totalcallsmade.FindtotalCalls(billmap, "MTN"), results);
    // done();
  });

it('should return a list of calls from Vodacom', function() {
  var billmap = readCSV.readCsv("./ItemisedBill.csv");
   var map = {
     '0821302398': 2,
     '0828907600' :1,
     '0828901271' : 2,
     '0821005078' : 1,
     '0824009001' :1,
     '0828009712': 1
   }
   assert.deepEqual(totalcallsmade.FindtotalCalls(billmap, "Vodacom"), map);
 // done();
});

 it('should return a list of calls from CellC', function() {
   var billmap = readCSV.readCsv("./ItemisedBill.csv");
      var results = {
        '0841257809' : 8,
        '0845009087' : 1,
        '0825605600' : 2
      }
      assert.deepEqual(totalcallsmade.FindtotalCalls(billmap, "CellC"), results);
      // done();
 });
});
