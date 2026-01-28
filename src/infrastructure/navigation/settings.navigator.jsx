import { CardStyleInterpolators, createStackNavigator } from '@react-navigation/stack';
import FavouritesScreen from '../../features/settings/screens/favourites.screen';
import SettingsScreen from '../../features/settings/screens/settings.screen';

const SettingsStack = createStackNavigator();

export const SettingsNavigator = () => (
  <SettingsStack.Navigator
    screenOptions={{
      headerMode: 'screen',
      cardStyleInterpolator:CardStyleInterpolators.forHorizontalIOS,
    //   ...TransitionPresets.ModalPresentationIOS,  
    }}
  >
    <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
    <SettingsStack.Screen name="FavouritesScreen" component={FavouritesScreen} />
  </SettingsStack.Navigator>
);
