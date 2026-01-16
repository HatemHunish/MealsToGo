import React, { useContext, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { ActivityIndicator, Searchbar } from 'react-native-paper';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { restaurants } from '../../../utils/data';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { RestaurantsContext } from '../../../services/resturants/resturants.context';
import { colors } from '../../../infrastructure/theme/colors';

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const ResturantCardList = styled(FlatList).attrs(({ theme }) => ({
  contentContainerStyle: { padding: 16 },
}))``;
const SearchBarCustom = styled(Searchbar)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
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
  const [searchQuery, setSearchQuery] = useState('');
  const { restaurants, isLoading, error } = useContext(RestaurantsContext);
  // console.log(restaurantsContext);

  return (
    <>
      <SafeAreaContainer>
        {isLoading && (
          <LoadingContainer>
            <Loading size={50} animating={true} color={colors.brand.primary} />
          </LoadingContainer>
        )}
        <SearchContainer>
          <SearchBarCustom placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
        </SearchContainer>
        <ResturantCardList
          data={restaurants}
          renderItem={({ item, index }) => <RestaurantInfoCard restaurant={item} />}
          keyExtractor={(item, index) => item.name + index}
        />
      </SafeAreaContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
