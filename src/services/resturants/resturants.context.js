import React, { useState, useEffect, createContext } from 'react';
import { restaurantsRequest,res, restaurantsTransform } from './resturants.service';
export const RestaurantsContext = createContext();

export const RestaurantsContextProvider = ({ children }) => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = async () => {
      setIsLoading(true);
      try {
        // Simulate an API call
        setTimeout(async () =>{
            restaurantsRequest()
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
    fetchRestaurants();
  }, []);
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
