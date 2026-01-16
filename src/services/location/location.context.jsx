import { createContext, useState } from 'react';
import { locationRequest, locationTransform } from './location.service';
export const LocationContext = createContext();

export const LocationContextProvider = ({ children }) => {
  const [keyword, setKeyword] = useState('San Francisco');
  const [location, setLocation] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const onSearch = (keyword) => {
    if (!keyword.length) {
      return;
    }
    setIsLoading(true);
    setKeyword(keyword);
    locationRequest(keyword)
      .then(locationTransform)
      .then((loc) => {
        setLocation(loc);
        console.log(loc);
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err);
      });
  };

  return (
    <LocationContext.Provider
      value={{
        isLoading,
        error,
        location,
        search: onSearch,
        keyword,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};
