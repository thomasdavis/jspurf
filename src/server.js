import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';

pg.defaults.ssl = true;

const DATABASE_URL = 'postgres://bggopnwgkrpthc:xR3OaGGcATxyfFTQQpOWP3Y1bz@ec2-54-225-81-90.compute-1.amazonaws.com:5432/d3ko9m2g3tsc94';

pg.connect(DATABASE_URL, (dberr, client) => {
  console.log('Database connected succesfully! PUR', dberr);

  const app = express();
  const PORT = process.env.PORT || 3000;

  app.use(bodyParser.json());

  app.get('/', (req, res) => {
    res.send('WE ARE THE BaESaT');
  });

  app.get('/experiments', (req, res) => {
    client.query('select * from experiments', (err, experiments) => {
      const { rows } = experiments;
      res.send(rows);
    });
  });

  app.listen(PORT);
});
