import { Platform } from 'react-native';
import styled from 'styled-components/native';
import CompactRestaurantInfo from '../../../components/restaurant/compact-restaurant-info.component';
const isAndriod = Platform.OS === 'android';
const CalloutContainer = styled.View`
  background-color: white;
  padding: 12px;
  border-radius: 8px;
  min-width: 150px;
`;

const Overlay = styled.View`
  position: absolute;
  bottom: 10px; /* adjust as needed */
  left: 20px;
  right: 20px;
  max-width: 140px;
  background-color: white;
  border-radius: 10px;
  padding: 12px;
`;
export default function MapCallOut({ restaurant }) {
  return (
    <CalloutContainer>
      <CompactRestaurantInfo restaurant={restaurant} />
    </CalloutContainer>
  );
}

export function MapCallOutOverlay({ restaurant }) {
  return (
    <Overlay>
      <CompactRestaurantInfo restaurant={restaurant} />
      {/* <Image
        source={{ uri: restaurant.photos[0] }}
        style={{ width: '100%', height: 120, borderRadius: 10 }}
      />
      <Text style={{ fontWeight: 'bold', marginTop: 8 }}>{restaurant.name}</Text>
      <Text numberOfLines={2}>{restaurant.vicinity}</Text> */}
    </Overlay>
  );
}
