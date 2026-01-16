import camelize from 'camelize';
import { mockImages, mocks } from './mock';

export const restaurantsRequest = (location = '37.7749295,-122.4194155') => {
  return new Promise((resolve, reject) => {
    const mocked = mocks[location];
    if (!mocked) {
      reject('No location found');
    }
    resolve(mocked);
  });
};

export const restaurantsTransform = (result = []) => {
  const mappedResult = result.results.map((restaurant) => {
    restaurant.photos = restaurant.photos.map((p) => {
      return mockImages[Math.floor(Math.random() * mockImages.length - 1)];
    });
    return {
      ...restaurant,
      isClosedTemporarily: restaurant.business_status === 'CLOSED_TEMPORARILY',
      isOpenNow: restaurant.opening_hours && restaurant.opening_hours.open_now,
      address: restaurant.vicinity,
    };
  });
  return camelize(mappedResult);
};
