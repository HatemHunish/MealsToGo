import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { FadeInView } from '../../../components/animations/fade.animation';
import { FavouritesBar } from '../../../components/favourites/favourites-bar.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { colors } from '../../../infrastructure/theme/colors';
import { FavouritesContext } from '../../../services/favourites/favourites.context';
import { RestaurantsContext } from '../../../services/resturants/resturants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import Search from '../components/search.component';

const ResturantCardList = styled(FlatList).attrs(() => ({
  contentContainerStyle: { padding: 16 },
}))``;

const Loading = styled(ActivityIndicator)`
  /* margin-left: -25px; */
`;
const LoadingContainer = styled.View`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-25px, -25px);
`;
export const RestaurantsScreen = ({ navigation }) => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  const { favourites } = useContext(FavouritesContext);
  const [showFavourites, setShowFavourites] = useState(false);
  // console.log(navigation);
  const goToRestaurantDetail = (restaurant) => {
    navigation.navigate('RestaurantDetail', { restaurant: restaurant });
  };
  return (
    <>
      <SafeAreaContainer>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={colors.brand.primary} />
          </LoadingContainer>
        )}
        <Search
          icon={showFavourites ? 'heart' : 'heart-outline'}
          onIconPress={() => setShowFavourites(!showFavourites)}
        />
        {showFavourites && (
          <FavouritesBar favourites={favourites} goToDetails={goToRestaurantDetail} />
        )}

        <ResturantCardList
          data={restaurants}
          renderItem={({ item }) => (
            <TouchableOpacity onPress={() => goToRestaurantDetail(item)}>
              <FadeInView>
                <RestaurantInfoCard restaurant={item} />
              </FadeInView>
            </TouchableOpacity>
          )}
          keyExtractor={(item, index) => item.name + index}
        />
      </SafeAreaContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
