import { Lato_400Regular, useFonts as useLatoFont } from '@expo-google-fonts/lato';
import { Oswald_400Regular, useFonts as useOswaldFont } from '@expo-google-fonts/oswald';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { AuthenticationContextProvider } from './src/services/authentication/authentication.context';

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
      <AuthenticationContextProvider>
        <SafeAreaProvider>
          <Navigation />
        </SafeAreaProvider>
      </AuthenticationContextProvider>
    </ThemeProvider>
  );
}
