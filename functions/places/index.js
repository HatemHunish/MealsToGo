const { type } = require('os');
const { mocks, addMockImages } = require('./mock');
const logger = require("firebase-functions/logger");
const addGoogleImage=(restaurant)=>{
    const ref=restaurant.photos && restaurant.photos.length>0 ? restaurant.photos[0].photo_reference:null;
    if(!ref){
        restaurant.photos=["https://images.pexels.com/photos/33846961/pexels-photo-33846961.jpeg"];
        return restaurant;
    }

    restaurant.photos=[`https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=${ref}&key=${process.env.GOOGLE_MAPS_API_KEY}`];
    return restaurant;
}
module.exports.placesRequest = (request, respnse, client) => {
  const { location, mock } = request.query;
  if (mock === 'true') {
    const data = mocks[location];
    if (!data) {
      return respnse.status(400).send({
        error: `You must provide a location query parameter with one of the following values: ${Object.keys(mocks).join(', ')}`,
      });
    }
    data.results = data.results.map(addMockImages);
    return respnse.status(200).send(data);
  }
  logger.info("Fetching places from Google Maps API", { location: location[0] });
  client
    .placesNearby({
      params: {
        location: location,
        radius: 5000,
        type: 'restaurant',
        key: process.env.GOOGLE_MAPS_API_KEY,
      },
      timeout: 1000, // milliseconds
    })
    .then((res) => {
    logger.info("Fetching places from Google Maps API", { location: location});
        res.data.results = res.data.results.map(addGoogleImage);
      return respnse.status(200).send(res.data);
    })
    .catch((error) => {
      logger.error('Places error:', error);
      return respnse.status(400).send(error.response.error_message);
    });
};
