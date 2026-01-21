import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from 'react-native';
import { SafeAreaContainer } from '../../components/utility/safe-area.component';

import { MapScreen } from '../../features/map/screen/map.screen';
import { RestaurantsNavigator } from './restaurants.navigator';
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
function SettingsScreen() {
  return (
    <SafeAreaContainer>
      <Text>Settings Screen</Text>
    </SafeAreaContainer>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={createScreenOptions}>
        <Tab.Screen name="Restaurants" component={RestaurantsNavigator} />
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
