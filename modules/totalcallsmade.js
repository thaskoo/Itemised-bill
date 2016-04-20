var fs = require('fs');
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
