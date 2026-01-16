import { Card } from 'react-native-paper';
import styled from 'styled-components/native';

export const Details = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ResturantCard = styled(Card)`
  margin-bottom: ${({ theme }) => theme.space[3]};
  margin-left: ${({ theme }) => theme.space[2]};
  margin-right: ${({ theme }) => theme.space[2]};
  background-color: ${({ theme }) => theme.colors.bg.primary};
`;
export const CardContent = styled.View`
  padding: ${({ theme }) => theme.space[3]};
`;
export const CardCover = styled(Card.Cover)`
  /* padding: 16px; */
  background-color: white;
  border-radius: 8px 8px 0 0;
`;
export const Section = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;
export const SectionEnd = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
`;
export const Icon = styled.Image`
  width: 15px;
  height: 15px;
`;
