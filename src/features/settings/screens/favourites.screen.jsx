import { useContext } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/text.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantInfoCard } from '../../restaurants/components/restaurant-info-card.component';
const RestaurantsList = styled(FlatList).attrs({
  contentContainerStyle: {
    padding: 16,
  },
})``;
const NoFavouritesArea = styled(SafeAreaContainer)`
  align-items: center;
  justify-content: center;
`;
export default function FavouritesScreen({navigation}) {
  const { favourites } = useContext(FavouritesContext);
    const goToRestaurantDetail = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant: restaurant });
  };
  return favourites.length ? (
    <SafeAreaContainer>
      <RestaurantsList
        data={favourites}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToRestaurantDetail(item)}>
            <RestaurantInfoCard restaurant={item} />
          </TouchableOpacity>
        )}
        keyExtractor={(item, index) => item.name + index}
      />
    </SafeAreaContainer>
  ) : (
    <NoFavouritesArea>
      <Text>No favourites yet</Text>
    </NoFavouritesArea>
  );
}
