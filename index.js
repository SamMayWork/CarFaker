const express = require('express');

const app = express();

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
});

app.get('*', (req, res) => {
  res.status(404).end();
});

/**
 * Takes a registration plate and creates some fake details for the vehicle
 * @param {*} registrationPlate
 */
function generateDetails(registrationPlate) {
  const tax = Math.round(Math.random()); const
    mot = Math.round(Math.random());
  return {
    reg: registrationPlate,
    taxStatus: tax,
    motStatus: mot,
  };
}

app.listen(8080);
