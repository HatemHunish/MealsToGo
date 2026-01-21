import { Platform, View } from 'react-native';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component';
import { Text } from '../../../components/typography/text.component';
const isAndriod = Platform.OS === 'android';
export default function MapCallOut({ restaurant }) {
  return (
    <View>
      <Text>{restaurant.name}</Text>
      <CompactRestaurantInfo restaurant={restaurant} />
    </View>
  );
}
