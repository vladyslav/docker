const express = require('express');

const app = express();

app.use(express.static('public'));

//make way for some custom css, js and images
app.use('/css', express.static(__dirname + '/public/css'));
app.use('/js', express.static(__dirname + '/public/js'));
app.use('/images', express.static(__dirname + '/public/images'));

const server = app.listen(9005, () => {
  const port = server.address().port;
  console.log('Server started at http://localhost:%s', port);
});
