import { SafeAreaProvider } from 'react-native-safe-area-context';
import { RestaurantsScreen } from './src/features/restaurants/screens/restaurants.screen';
import { useFonts as useOswaldFont, Oswald_400Regular } from '@expo-google-fonts/oswald';
import { useFonts as useLatoFont, Lato_400Regular } from '@expo-google-fonts/lato';
import { ThemeProvider } from 'styled-components/native';
import { theme } from './src/infrastructure/theme';

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
      <SafeAreaProvider>
        <RestaurantsScreen />
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
