const functions = require('firebase-functions');
//const build = require('./dist/bundle.js');
//require('./thumbnails/functions/index')

var r = require('./src/lib/helloworld');

exports.helloWorld = r.echo(functions);

var r = require('./src/item/newpost');

exports.newPost = r.newpost(functions);

//exports.newPost = build.newpost(functions);
//exports.helloWorld = build.hello_world(functions);
//exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("<html><body><b>hello!!!!!!!!!!yoo</b></body></html>");
//});


