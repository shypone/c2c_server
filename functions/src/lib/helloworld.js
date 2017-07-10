module.exports.echo = function (functions) {
  return functions.https.onRequest((request, response) => {
    response.send("<html><body><b>hello!!!!!!!!!!yoo</b></body></html>");
  });
}

