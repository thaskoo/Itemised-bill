var fs = require('fs');
exports.FindtotalCalls = function(getPhoneCalls) {
  var FindtotalCalls = {};
  for (i = 0; i < getPhoneCalls.length; i++) {
    var specifiedCalls = getPhoneCalls[i];
    if (!FindtotalCalls[specifiedCalls.number]) {
      FindtotalCalls[specifiedCalls.number] = 1;
    }
		else {
      FindtotalCalls[specifiedCalls.number] += 1;
    }
  }
  return FindtotalCalls;
};
