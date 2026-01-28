import AsyncStorage from '@react-native-async-storage/async-storage';
import { createContext, useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../authentication/authentication.context';
const STORAGE_KEY = '@favourites';
const saveFavourites = async (value,uid) => {
  try {
    console.log('Saving favourites for user:', uid);
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(`${STORAGE_KEY}-${uid}`, jsonValue);
  } catch (e) {
    // saving error
    console.log('Error storing', e);
  }
};
const loadFavourites = async (uid) => {
  try {
    console.log('Loading favourites for user:', uid);
    const jsonValue = await AsyncStorage.getItem(`${STORAGE_KEY}-${uid}`);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    // error reading value
    console.log('Error loading', e);
  }
};
export const FavouritesContext = createContext();

export const FavouritesContextProvider = ({ children }) => {
  const { user } = useContext(AuthenticationContext);
  console.log('FavouritesContextProvider user', user);
  const [favourites, setFavourites] = useState([]);

  const add = (restaurant) => {
    setFavourites([...favourites, restaurant]);
  };
  const remove = (restaurant) => {
    const newFavourites = favourites.filter((x) => x.placeId !== restaurant.placeId);
    setFavourites(newFavourites);
  };
  useEffect(() => {
    if(!user?.uid){
      return;
    }
    loadFavourites(user.uid).then((loadedFavourites) => {
      if (loadedFavourites && loadedFavourites.length) {
        setFavourites(loadedFavourites);
      }
    });
  }, [user?.uid]);
  useEffect(() => {
    if(!user?.uid){
      return;
    }
    saveFavourites(favourites, user.uid);
  }, [favourites, user?.uid]);
  return (
    <FavouritesContext.Provider
      value={{ favourites, addToFavourites: add, removeFromFavourites: remove }}
    >
      {children}
    </FavouritesContext.Provider>
  );
};
