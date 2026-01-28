import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useContext } from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { FavouritesContext } from '../../services/favourites/favourites.context';

const FavouriteButton = styled(TouchableOpacity)`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 9;
`;

export const Favourite = ({ restaurant }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
  const isFavourite = favourites.find((r) => r.placeId === restaurant.placeId);
  const onPress = () => {
    if (isFavourite) {
      removeFromFavourites(restaurant);
    } else {
      addToFavourites(restaurant);
    }
  };
  return (
    <FavouriteButton onPress={onPress}>
      <FontAwesome
        name={isFavourite ? 'heart' : 'heart-o'}
        size={24}
        color={isFavourite ? 'red' : 'white'}
      />
    </FavouriteButton>
  );
};
