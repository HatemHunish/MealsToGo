import { createContext, useContext, useEffect, useState } from 'react';
import { LocationContext } from '../location/location.context';
import { restaurantsRequest, restaurantsTransform } from './resturants.service';
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const { location } = useContext(LocationContext);
  const locationString = location && `${location.lat},${location.lng}`;
  useEffect(() => {
    const fetchRestaurants = async (locationString) => {
      setIsLoading(true);
      setRestaurants([]);
      try {
        // Simulate an API call
        setTimeout(async () => {
          restaurantsRequest(locationString)
            .then(restaurantsTransform)
            .then((results) => {
              const transformedResults = results;
              setRestaurants(transformedResults);
              setIsLoading(false);
            });
        }, 2000);
      } catch (err) {
        setError(err);
        setIsLoading(false);
      }
    };
    if (locationString) fetchRestaurants(locationString);
  }, [locationString]);
  return (
    <RestaurantsContext.Provider
      value={{
        restaurants,
        isLoading,
        error,
      }}
    >
      {children}
    </RestaurantsContext.Provider>
  );
};
