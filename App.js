import { Lato_400Regular, useFonts as useLatoFont } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswaldFont } from '@expo-google-fonts/oswald';
import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { Text } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { SafeAreaContainer } from './src/components/utility/safe-area.component';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { theme } from './src/infrastructure/theme';
import { LocationContextProvider } from './src/services/location/location.context';
import { RestaurantsContextProvider } from './src/services/resturants/resturants.context';

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
  const navigation = useNavigation();
  return (
    <SafeAreaContainer>
      <Text>Settings Screen</Text>
    </SafeAreaContainer>
  );
}

const MapScreen = () => (
  <SafeAreaContainer>
    <Text>Map Screen</Text>
  </SafeAreaContainer>
);

export default function App() {
  const [oswaldLoaded] = useOswaldFont({
    Oswald_400Regular,
  });
  const [latoLoaded] = useLatoFont({
    Lato_400Regular,
  });

  if (!oswaldLoaded || !latoLoaded) {
    return null;
  }
  return (
    <ThemeProvider theme={theme}>
      <LocationContextProvider>
        <RestaurantsContextProvider>
          <SafeAreaProvider>
            <NavigationContainer>
              <Tab.Navigator screenOptions={createScreenOptions}>
                <Tab.Screen name="Restaurants" component={RestaurantsScreen} />
                <Tab.Screen name="Map" component={MapScreen} />
                <Tab.Screen name="Settings" component={SettingsScreen} />
              </Tab.Navigator>
            </NavigationContainer>
          </SafeAreaProvider>
        </RestaurantsContextProvider>
      </LocationContextProvider>
    </ThemeProvider>
  );
}
