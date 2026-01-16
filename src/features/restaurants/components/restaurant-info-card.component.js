import React from 'react';
import { Text } from '../../../components/typography/text.component';
import { SvgXml } from 'react-native-svg';
import star from '../../../../assets/star';
import open from '../../../../assets/open';
import { Spacer } from '../../../components/spacer/spacer.component';
import {
  CardContent,
  CardCover,
  Details,
  Icon,
  ResturantCard,
  Section,
  SectionEnd,
} from './restaurant-info-card.styles';

export const RestaurantInfoCard = ({ restaurant }) => {
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  return (
    <ResturantCard elevation={2}>
      <CardCover source={{ uri: photos[0] }} />
      <CardContent>
        <Text variant="label">{name}</Text>
        <Details>
          <Section>
            <Text>
              {ratingArray.map((_, i) => (
                <SvgXml key={i} xml={star} width={20} height={20} />
              ))}
            </Text>
            <SectionEnd>
              <Text variant="error">
                {isClosedTemporarily ? (
                  'Closed Temporarily'
                ) : isOpenNow ? (
                  <SvgXml xml={open} width={20} height={20} />
                ) : (
                  'Closed'
                )}
              </Text>
              <Spacer position="left" size="medium" />
              <Icon source={{ uri: icon }} />
            </SectionEnd>
          </Section>
        </Details>
        <Text variant="caption">{address}</Text>
      </CardContent>
    </ResturantCard>
  );
};


