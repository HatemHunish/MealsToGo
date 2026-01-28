import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
export const SafeAreaContainer = styled(SafeAreaView).attrs({
  edges: ['top'],
})`
  background-color: ${(props) => props.theme.colors.bg.primary};
  flex: 1;
`;
