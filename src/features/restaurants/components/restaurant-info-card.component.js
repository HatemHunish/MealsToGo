import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';
import { SvgXml } from 'react-native-svg';
import styled from 'styled-components/native';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';

const Name=styled.Text`
    font-size: ${props => props.theme.fontSizes.title};
    font-family:${props => props.theme.fonts.heading};
    font-weight: ${props => props.theme.fontWeights.bold};
    margin-bottom: ${props => props.theme.space[2]};
`
const Address=styled.Text`
    font-size: ${props => props.theme.fontSizes.caption};
    color: ${props => props.theme.colors.ui.secondary};
    margin-bottom:  ${props => props.theme.space[2]};
`
const Details=styled.View`
    flex-direction: row;
    justify-content: space-between;
`
const Rating=styled.Text`
    font-size: ${props => props.theme.fontSizes.body};
    font-weight: ${props => props.theme.fontWeights.bold};
`
const Status=styled.Text`
    font-size: ${props => props.theme.fontSizes.caption};
    font-weight: ${props => props.theme.fontWeights.bold};
    color: ${props => props.theme.colors.ui.error};
`
const ResturantCard=styled(Card)`
    margin-bottom:  ${props => props.theme.space[3]};
    margin-left: ${props => props.theme.space[2]};
    margin-right: ${props => props.theme.space[2]};
    background-color: ${props => props.theme.colors.bg.primary};
`
const CardContent=styled.View`
    padding: ${props => props.theme.space[3]};
`
const CardCover=styled(Card.Cover)`
    /* padding: 16px; */
    background-color: white;
    border-radius: 8px 8px 0 0;
`
const Section=styled.View`
    flex-direction: row;
    align-items: center;
    flex: 1;
`
const SectionEnd=styled.View`
    flex: 1;
    flex-direction: row;
justify-content: flex-end;
`

export const RestaurantInfoCard = ({ restaurant }) => {
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={2}>
      <CardCover source={{ uri: photos[0] }}  />
      <CardContent>
        <Name>{name}</Name>
        <Details>
          <Section>
          <Rating>
            {ratingArray.map((_, i) => (
              <SvgXml key={i} xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
             <Status>
            {isClosedTemporarily ? 'Closed Temporarily' : isOpenNow ? <SvgXml xml={open} width={20} height={20} />: 'Closed'}
            {/* <View style={{ paddingLeft: 16 }} /> */}
          </Status>
              <Spacer position="left" size="medium" />
            <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
          </SectionEnd>
            </Section>
         
        </Details>
        <Address>{address}</Address>
      </CardContent>
    </ResturantCard>
  );
};


