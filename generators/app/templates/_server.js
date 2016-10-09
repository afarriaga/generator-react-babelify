/* jslint node: true */

var DATA_FILE = '/data/list.json';

var
  fs = require('fs'),
  path = require('path'),
  express = require('express'),
  bodyParser = require('body-parser');

var app = express();

app.use('/', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api', function(req, res) {
  fs.readFile(path.join(__dirname, DATA_FILE), function(err, data) {
    if (err) {
      console.error(err);
      process.exit(1);
    }

    res.json(JSON.parse(data));
  });
});

app.set('port', process.env.PORT || 3000);
app.listen(app.get('port'), function() {
  console.log('Server started: http://localhost:' + app.get('port') + '/');
});
