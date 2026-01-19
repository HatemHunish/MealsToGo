import { createStackNavigator } from '@react-navigation/stack';
import { RestaurantsScreen } from '../../features/restaurants/screens/restaurants.screen';

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
    <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
  </RestaurantStack.Navigator>
);
