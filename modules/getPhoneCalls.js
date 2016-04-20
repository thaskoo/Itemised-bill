var fs = require('fs');

exports.getPhoneCalls = function(billmap, service) {
  var phoneCalllist = [];
    for (var i in billmap){
      if (billmap[i].provider == service && billmap[i] !== undefined){
        phoneCalllist.push({"provider": billmap[i].provider,
                            "number":   billmap[i].number,
                            "duration": billmap[i].duration
                          });
      }
    }
    return phoneCalllist;
}
