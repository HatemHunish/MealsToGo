import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useNavigation, NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { useFonts as useOswaldFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';
import { Text, View } from 'react-native';
import { SafeAreaContainer } from './src/components/utility/safe-area.component';
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
    </ThemeProvider>
  );
}
