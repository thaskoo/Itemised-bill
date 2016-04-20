var fs = require('fs');
exports.readCsv = function(fileName) {
    var stream = fs.readFileSync(fileName);
    var list = stream.toString();
    var rows = list.split('\n').slice(1);
    console.log(rows);
    var itemisedBill = rows.map(function(row) {
    var fields = row.split(',');
      return {
          date: fields[0],
          provider: fields[1],
          number: fields[2],
          duration: fields[3]
        };
    });
      itemisedBill.pop();
      return itemisedBill;
  };
