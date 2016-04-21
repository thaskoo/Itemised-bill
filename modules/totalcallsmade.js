var fs  = require("fs"); // define the module
exports.FindtotalCalls = function (file) {
	var totalCalls = {};
	for(var  i in totalCalls) {
		var total = totalCalls[i];

		if(totalCalls[i] === undefined){
			totalCalls[i] = 0;

		}
		totalCalls[i] = totalCalls[i] + total;
	}
	console.log(totalCalls);
	return totalCalls;
};
