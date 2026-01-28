import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../restaurant/compact-restaurant-info.component';
import { Spacer } from '../spacer/spacer.component';
import { Text } from '../typography/text.component';

const FavouritesWrapper = styled.View`
  padding: ${(props) => props.theme.space[2]};
`;
const FavouritesList = styled.FlatList`
  /* height: 120px; */
`;

export const FavouritesBar = ({ favourites, goToDetails }) => {
  if (!favourites.length) {
    return null;
  }
  return (
    <FavouritesWrapper>
      <Spacer position="left" size="large">
        <Text variant="caption">Favourites</Text>
      </Spacer>
      <FavouritesList
        data={favourites}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.placeId}
        renderItem={({ item }) => {
          const key = item.name;
          return (
            <Spacer key={key} position="left" size="medium">
              <TouchableOpacity onPress={() => goToDetails(item)}>
                <CompactRestaurantInfo restaurant={item} />
              </TouchableOpacity>
            </Spacer>
          );
        }}
      />
    </FavouritesWrapper>
  );
};
