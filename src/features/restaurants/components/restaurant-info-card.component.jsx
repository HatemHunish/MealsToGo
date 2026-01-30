import { SvgXml } from 'react-native-svg';
import open from '../../../../assets/open';
import star from '../../../../assets/star';
import { Favourite } from '../../../components/favourites/favourites.component';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
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
  const { name, icon, photos, address, isOpenNow, rating, isClosedTemporarily, placeId } =
    restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating || 0)));

  return (
    <ResturantCard elevation={2}>
      <Favourite restaurant={restaurant} />
      <CardCover
        source={{
          uri: photos?.[0],
        }}
      />
      <CardContent>
        <Text variant="label">{name}</Text>
        <Details>
          <Section>
            <Text>
              {ratingArray.map((_, i) => (
                <SvgXml key={`${placeId}-${i}`} xml={star} width={20} height={20} />
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
