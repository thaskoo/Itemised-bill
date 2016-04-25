var fs = require('fs');

exports.calculateDuration = function(specifies) {

  var Duration = [];
  for (i in specifies) {
    var timeinseconds = specifies[i].duration;

    timeinseconds = timeinseconds.split(/h|m|s/);
    timeinseconds.pop();
    timeinseconds = parseInt((timeinseconds[1] * 60)) + parseInt(timeinseconds[2]);

     Duration.push({
      provider: specifies[i].provider,
      number: specifies[i].number,
      duration: timeinseconds
    });
  }
  return Duration;
};
