# CarFaker

This is a small application that starts a webserver on port 8080, and listens for incoming UK Registration Plates and returns some faked data regarding their MOT and Tax status.

CarFaker keeps track of previous Registration requests, and sends back the same data each time the registration is requested. (Does not currently support saving to file).

### Setup
---
``` npm install && npm start```