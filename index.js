const express = require('express');

const app = express();

const data = {
}

app.get('/api/', (req, res) => {
  let result = undefined;
  if(data[req.query.reg] == undefined) {
    result = generateDetails(req.query.reg);
    data.reg = result;
  } else {
    result = data[req.query.reg];
  }

  res.status(200);
  res.json(result);
  res.end();
});

app.get('*', (req, res) => {
  res.status(404);
  res.end();
});

/**
 * Takes a registration plate and creates some fake details for the vehicle
 * @param {*} registrationPlate 
 */
function generateDetails (registrationPlate) {
  const tax = Math.round(Math.random()), mot = Math.round(Math.random());
  return {
    reg : registrationPlate,
    taxStatus : tax,
    motStatus : mot
  }
}

app.listen(8080);