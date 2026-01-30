const { locations: locationsMock } = require('./geocode.mock');
module.exports.geocodeRequest = (request, respnse, client) => {
  const { city: searchTerm, mock } = request.query;
  const cities = Object.keys(locationsMock);
  if (mock === 'true') {
    const city = cities.find((c) => c.toLowerCase().includes(searchTerm.toLowerCase()));
    console.log('Requested city:', city);
    if (!city) {
      return respnse.status(400).send({
        error: `You must provide a city query parameter with one of the following values: ${cities.join(', ')}`,
      });
    }
    const location = locationsMock[city];
    if (!location) {
      return respnse.status(404).send({ error: 'Location not found' });
    }
    return respnse.status(200).send(location);
  }
  client.geocode({
    params: {
      address: searchTerm,
      key: process.env.GOOGLE_MAPS_API_KEY,
    },
    timeout: 1000, // milliseconds
  }).then((res) => {
    console.log('Geocode response:', res.data);
    return respnse.status(200).send(res.data); 
  }).catch((error) => {
    console.error('Geocode error:', error);
    return respnse.status(400).send(error.response.error_message);
  });
};
