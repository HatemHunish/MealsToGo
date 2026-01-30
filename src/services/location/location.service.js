import camelize from 'camelize';
import { BACKEND_URL, isMock } from '../../utils/env';

export const locationRequest = (searchTerm) => {
  return fetch(`${BACKEND_URL}/geocode?city=${searchTerm}&mock=${isMock}`).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const { geometry = {} } = camelize(result.results)[0];
  const { lat, lng } = geometry.location;
  return { lat, lng, viewport: geometry.viewport };
};
