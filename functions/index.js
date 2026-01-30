const { setGlobalOptions } = require("firebase-functions");
const { onRequest } = require("firebase-functions/https");
const logger = require("firebase-functions/logger");
const express = require("express");
const {Client} = require("@googlemaps/google-maps-services-js");

const client = new Client({});

const { geocodeRequest } = require("./geocode");
const { placesRequest } = require("./places");

setGlobalOptions({ maxInstances: 10 });

const app = express();

app.get("/geocode", (req, res) => {
  logger.info("Geocode request received");
  return geocodeRequest(req, res,client);
});

app.get("/places-nearby", (req, res) => {
  logger.info("Places Nearby request received");
  return placesRequest(req, res,client);
});
// create an inifinte loop to test maxInstances
app.get("/infinite-loop", (req, res) => {
  logger.info("Infinite loop request received");
  while (true) {}
  return res.status(200).send("This will never be reached");
});
exports.api = onRequest(app);
