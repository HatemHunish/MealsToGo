import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { FlatList } from 'react-native';
import { ActivityIndicator } from 'react-native-paper';
import styled from 'styled-components/native';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { colors } from '../../../infrastructure/theme/colors';
import { RestaurantsContext } from '../../../services/resturants/resturants.context';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import Search from '../components/search.component';

const ResturantCardList = styled(FlatList).attrs(({ theme }) => ({
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
export const RestaurantsScreen = () => {
  const { restaurants, isLoading } = useContext(RestaurantsContext);
  // console.log(restaurantsContext);

  return (
    <>
      <SafeAreaContainer>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={colors.brand.primary} />
          </LoadingContainer>
        )}
        <Search />
        <ResturantCardList
          data={restaurants}
          renderItem={({ item }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item, index) => item.name + index}
        />
      </SafeAreaContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
