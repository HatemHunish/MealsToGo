import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { Searchbar } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { RestaurantInfoCard } from '../components/restaurant-info-card.component';
import { restaurants } from '../../../utils/data';
const SearchContainer=styled.View`
    padding: ${props => props.theme.space[3]};
`
const SafeAreaContainer=styled(SafeAreaView)`
    flex: 1;
`
const ResturantCardList=styled(FlatList)`
    flex: 1;
    padding:  ${props => props.theme.space[3]};
`
const SearchBarCustom=styled(Searchbar)`
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.colors.bg.primary};
    margin-bottom: ${props => props.theme.space[3]};
`
export const RestaurantsScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  return (
    <> 
      <SafeAreaContainer>
        <SearchContainer>
          <SearchBarCustom placeholder="Search" onChangeText={setSearchQuery} value={searchQuery} />
        </SearchContainer>
        <ResturantCardList
          data={restaurants}
          renderItem={({ item, index }) => (
            <RestaurantInfoCard
              restaurant={item}
            />
          )}
          keyExtractor={(item, index) => item.name+index}
        />
      </SafeAreaContainer>
      <ExpoStatusBar style="auto" />
    </>
  );
};
