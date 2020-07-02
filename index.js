/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');

const cm = require('./carmanager');

const app = express();

app.use(cors());

const manager = new cm.CarManager();

const configuration = {
  verbose: false,
  port: 8080,
};

app.get('/api/', (req, res) => {
  let result = manager.getDetails(req.query.reg);
  res.status(200).json(result);

  if (configuration.verbose) {
    console.log(`Request for ${req.query.reg}, sent ${JSON.stringify(result)}`);
  }
});

app.get('*', (req, res) => {
  if (configuration.verbose) {
    console.log(`404 Request for ${req.url}`);
  }

  res.status(404).end();
});

if (process.argv[2]) {
  if (process.argv[2].toLowerCase() === 'verbose') {
    configuration.verbose = true;
  }
}

if (configuration.verbose) {
  console.log(`Listening on port ${configuration.port}`);
}
app.listen(configuration.port);
