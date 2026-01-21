import { useContext } from 'react';
import { Platform } from 'react-native';
import MapView, { Callout, Marker } from 'react-native-maps';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
import { RestaurantsContext } from '../../../services/resturants/resturants.context';
import MapCallOut from '../components/map-callout.component';
import Search from '../components/search.component';

const Map = styled(MapView)`
  height: 100%;
  width: 100%;
`;
const isAndroid = Platform.OS === 'android';
export const MapScreen = () => {
  const { location } = useContext(LocationContext);
  const { restaurants } = useContext(RestaurantsContext);
  const { lat, lng, viewport } = location;
  const latDelta = viewport.northeast.lat - viewport.southwest.lat;

  return (
    <>
      <Search />
      <Map
        region={{
          latitude: lat,
          longitude: lng,
          latitudeDelta: latDelta,
          longitudeDelta: 0.02,
        }}
      >
        {restaurants.map((restaurant, index) => {
          return (
            <Marker
              key={index + restaurant.name}
              title={restaurant.name}
              coordinate={{
                latitude: restaurant.geometry.location.lat,
                longitude: restaurant.geometry.location.lng,
              }}
            >
              <Callout tooltip={isAndroid}>
                <MapCallOut restaurant={restaurant} />
              </Callout>
            </Marker>
          );
        })}
      </Map>
    </>
  );
};
