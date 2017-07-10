module.exports.newpost = function(functions) {
  return functions.database
    .ref('/posts/{postId}')
    .onWrite(function(event) {
      // only execute function on creation
      if (!event.data.previous.exists()) {
        notifyUsers(event.data.val());
      }
    });
}


