module.exports.create = function (functions) {
  return functions.auth.user().onCreate(function(event) {
    var uid = event.data.uid;
    var displayName = event.data.displayName;
    return sendEmail(uid, displayName);
  });
}


