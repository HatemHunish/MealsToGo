import camelize from 'camelize';
import { BACKEND_URL, isMock } from '../../utils/env';


export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
    return fetch(`${BACKEND_URL}/places-nearby?location=${location}&mock=${isMock}`).then((res) => {
      console.log(`${BACKEND_URL}/places-nearby?location=${location}`);
      return res.json();
    });
};

export const restaurantsTransform = (result = []) => {
  const mappedResult = result.results.map((restaurant) => {
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResult);
};
