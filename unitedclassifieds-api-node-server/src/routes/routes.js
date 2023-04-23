const express = require("express");
// const axios = require("axios");
const Amadeus = require("amadeus");

const amadeus = new Amadeus({
  clientId: "Z6cHi0tEt7jVjeMPEiA0HetLhPtjAAhA",
  clientSecret: "qYjPZb8gZ3lihSTm"
});

const router = express.Router();

const baseUrlv2 = "https://test.api.amadeus.com/v2";
const baseUrlv1 = "https://test.api.amadeus.com/v2";

router.get(`/locations`, async (req, res) => {
  console.log(req.query);
  let keyword = req.query.keyword;
  const response = await amadeus.referenceData.locations
    .get({
      keyword: keyword,
      subType: "CITY,AIRPORT",
    })
    .catch((x) => console.log(x));
  try {
    // console.log(JSON.parse(response.body))
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

router.get(`/flightOffers`, async (req, res) => {
  console.log(req.query);
  // console.log(amadeus);
  let originLocationCode = req.query.originLocationCode;
  let destinationLocationCode = req.query.destinationLocationCode;
  let departureDate = req.query.departureDate;
  let adults = req.query.adults;
  let returnDate = req.query.returnDate ? req.query.returnDate : "";
  const response = await amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: originLocationCode,
      destinationLocationCode: destinationLocationCode,
      departureDate: departureDate,
      adults: adults,
      returnDate: returnDate,
    })
    .catch((x) => console.log(x));
  try {
    // console.log(JSON.parse(response.body))
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

router.get("/date", async function(req, res) {
  console.log(req.body);
  departure = req.query.departure;
  arrival = req.query.arrival;
  locationDeparture = req.query.locationDeparture;
  locationArrival = req.query.locationArrival;
  adults = req.query.adults;
  max = req.query.max;
  const response = await amadeus.shopping.flightOffersSearch
    .get({
      originLocationCode: locationDeparture,
      destinationLocationCode: locationArrival,
      departureDate: departure,
      adults: adults,
      max: max,
    })
    .catch((err) => console.log(err));
  try {
    await res.json(JSON.parse(response.body));
  } catch (err) {
    await res.json(err);
  }
});

module.exports = router;