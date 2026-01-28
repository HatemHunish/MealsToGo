import { Button, TextInput } from 'react-native-paper';
import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
export const AccountBackground = styled.ImageBackground.attrs({
  source: require('../../../../assets/home_bg.png'),
})`
  flex: 1;
  background-color: #ddd;
  justify-content: center;
  align-items: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.1);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${(props) => props.theme.space[4]};
  border-radius: 5px;
  min-width: 80%;
  margin-top: ${(props) => props.theme.space[2]};
`;

export const AuthButton = styled(Button).attrs({
  color: colors.brand.primary,
})`
  border-radius: 5px;
  padding: ${(props) => props.theme.space[2]};
`;
export const AuthInput = styled(TextInput)`
  width: 300px;
`;
export const Title = styled.Text`
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.ui.tertiary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${(props) => props.theme.space[2]};
  margin-bottom: ${(props) => props.theme.space[2]};
`;


export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: ${(props) => props.theme.space[2]};
`;