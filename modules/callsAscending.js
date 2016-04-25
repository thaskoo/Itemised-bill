var fs = require('fs');

exports.sortInAscOrder = function(Duration) {

  var sort = Duration.sort(function(a, b) {
    return (a.duration - b.duration)
  });
  return sort;
};
