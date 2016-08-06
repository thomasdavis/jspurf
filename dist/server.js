'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _pg = require('pg');

var _pg2 = _interopRequireDefault(_pg);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var indexTemplate = _fs2.default.readFileSync('index.html', 'utf8');

_pg2.default.defaults.ssl = true;

var DATABASE_URL = 'postgres://bggopnwgkrpthc:xR3OaGGcATxyfFTQQpOWP3Y1bz@ec2-54-225-81-90.compute-1.amazonaws.com:5432/d3ko9m2g3tsc94';

_pg2.default.connect(DATABASE_URL, function (dberr, client) {
  console.log('Database connected succesfully! PUR', dberr);

  var app = (0, _express2.default)();
  var PORT = process.env.PORT || 3000;
  app.use('/app', _express2.default.static(__dirname + '/../app'));
  app.use('/public', _express2.default.static(__dirname + '/../public'));

  app.use(_bodyParser2.default.json());

  app.get('/', function (req, res) {
    res.send(indexTemplate);
  });

  app.get('/experiments', function (req, res) {
    client.query('select * from experiments', function (err, experiments) {
      var rows = experiments.rows;

      res.send(rows);
    });
  });

  app.listen(PORT);
});