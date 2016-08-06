import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import fs from 'fs';


const indexTemplate = fs.readFileSync('index.html', 'utf8');

pg.defaults.ssl = true;

const DATABASE_URL = 'postgres://bggopnwgkrpthc:xR3OaGGcATxyfFTQQpOWP3Y1bz@ec2-54-225-81-90.compute-1.amazonaws.com:5432/d3ko9m2g3tsc94';

pg.connect(DATABASE_URL, (dberr, client) => {
  console.log('Database connected succesfully! PUR', dberr);

  const app = express();
  const PORT = process.env.PORT || 3000;
  app.use('/app', express.static(__dirname + '/../app'));
  app.use('/public', express.static(__dirname + '/../public'));

  app.use(bodyParser.json());



  app.get('/api/experiments', (req, res) => {
    client.query('select * from experiments', (err, experiments) => {
      const { rows } = experiments;
      res.send(rows);
    });
  });

  app.get('/api/experiments/:id', (req, res) => {
    console.log('load experiment');
    const id = req.params.id;
    client.query('select * from experiments WHERE id = ' + id, (err, experiments) => {
      const { rows } = experiments;
      const experiment = rows[0];
      client.query('select * from snippets WHERE experiment_id = ' + id, (err, snippets) => {
        console.log(snippets);
        experiment.snippets = snippets.rows;
        res.send(experiment);
      });
    });
  });


  app.get('*', (req, res) => {
    res.send(indexTemplate);
  });
  app.listen(PORT);
});
