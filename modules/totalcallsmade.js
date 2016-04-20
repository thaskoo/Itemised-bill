var fs = require('fs');
//calculate the total number of calls made to numbers for each cell phone provider
exports.totalcalls = function(phone) {
  var totalcalls = {};
for (i = 0; i < phone.length; x++) {
    var Calls = phones[x];
    if (!totalcalls[Calls.number]) {
      totalcalls[Calls.number] = 1;
    } else {
      totalcalls[Calls.number] += 1;
    }
  }
  return totalcalls;
};
// module.exports.totalcalls = totalcalls;
