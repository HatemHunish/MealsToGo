import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { MapScreen } from '../../features/map/screen/map.screen';

import { createStackNavigator, TransitionPresets } from '@react-navigation/stack';
import { RestaurantDetailScreen } from '../../features/restaurants/screens/restaurant-detail.screen';
import { FavouritesContextProvider } from '../../services/favourites/favourites.context';
import { LocationContextProvider } from '../../services/location/location.context';
import { RestaurantsContextProvider } from '../../services/resturants/resturants.context';
import { RestaurantsNavigator } from './restaurants.navigator';
import { SettingsNavigator } from './settings.navigator';
const Tab = createBottomTabNavigator();

const TAB_ICONS = {
  Restaurants: 'restaurant',
  Settings: 'settings',
  Map: 'map',
};
const createScreenOptions = ({ route }) => ({
  tabBarActiveTintColor: 'tomato',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
  tabBarIcon: ({ color, size }) => (
    <Ionicons name={TAB_ICONS[route.name]} size={size} color={color} />
  ),
});
const AppTabs = () => (
  <Tab.Navigator screenOptions={createScreenOptions}>
    <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
    <Tab.Screen name="Map" component={MapScreen} />
    <Tab.Screen name="Settings" component={SettingsNavigator} />
  </Tab.Navigator>
);
const RootStack = createStackNavigator();
export default function AppNavigator() {
  return (
    <LocationContextProvider>
      <RestaurantsContextProvider>
        <FavouritesContextProvider>
          <RootStack.Navigator
            screenOptions={{
              headerShown: false,
              ...TransitionPresets.ModalPresentationIOS,
            }}
          >
            <RootStack.Screen name="AppTabs" component={AppTabs} />
            <RootStack.Screen name="RestaurantDetail" component={RestaurantDetailScreen} />
          </RootStack.Navigator>
        </FavouritesContextProvider>
      </RestaurantsContextProvider>
    </LocationContextProvider>
  );
}
