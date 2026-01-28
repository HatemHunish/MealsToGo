import { useContext, useState } from 'react';
import { ActivityIndicator } from 'react-native-paper';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { colors } from '../../../infrastructure/theme/colors';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
import {
    AccountBackground,
    AccountContainer,
    AccountCover,
    AuthButton,
    AuthInput,
    ErrorContainer,
    Title,
} from '../components/account.styles';
export const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { onRegister, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground resizeMode="cover">
      <AccountCover />
      <Title>Meals To Go</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          onChangeText={(u) => setEmail(u)}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <Spacer size="large" position="top" />
        <AuthInput
          label="Password"
          value={password}
          onChangeText={(p) => setPassword(p)}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Spacer size="large" position="top" />
        <AuthInput
          label="Confirm Password"
          value={confirmPassword}
          onChangeText={(cp) => setConfirmPassword(cp)}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
        />
        <Spacer size="large" position="top" />
        {isLoading ? (
          <ActivityIndicator animating={true} color={colors.ui.secondary} />
        ) : (
          <AuthButton
            icon={'lock-open-outline'}
            mode="contained"
            onPress={() => onRegister(email, password, confirmPassword)}
          >
            Register
          </AuthButton>
        )}
        <ErrorContainer>
          <Text variant="error">{error}</Text>
        </ErrorContainer>
      </AccountContainer>
      <Spacer size="large" position="top" />
      <AuthButton icon={'arrow-left'} mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AuthButton>
    </AccountBackground>
  );
};
