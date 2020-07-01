/* eslint-disable no-console */

const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const configuration = {
  taxChance: 90,
  motChance: 70,
  verbose: false,
  port: 8080,
};

const data = {
};

app.get('/api/', (req, res) => {
  let result;

  // If we've seen the reg before, send the previous data
  // If we've never seen the reg before, make some data, send it, store it
  if (data[req.query.reg] === undefined) {
    result = generateDetails(req.query.reg);
    data[req.query.reg] = result;
  } else {
    result = data[req.query.reg];
  }

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

/**
 * Takes a registration plate and creates some fake details for the vehicle
 * @param {*} registrationPlate
 */
function generateDetails(registrationPlate) {
  const tax = randomValue(0, 100) < configuration.taxChance;
  const mot = randomValue(0, 100) < configuration.motChance;
  return {
    reg: registrationPlate,
    hasTax: tax,
    hasMot: mot,
  };
}

/**
 * Generates a random arbitrary value
 * @param {*} min
 * @param {*} max
 */
const randomValue = (min, max) => Math.random() * (max - min) + min;

if (process.argv[2]) {
  if (process.argv[2].toLowerCase() === 'verbose') {
    configuration.verbose = true;
  }
}

if (configuration.verbose) {
  console.log(`Listening on port ${configuration.port}`);
}
app.listen(configuration.port);
