import { useContext, useState } from 'react';
import { Searchbar } from 'react-native-paper';
import styled from 'styled-components/native';
import { LocationContext } from '../../../services/location/location.context';
const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;
const SearchBarCustom = styled(Searchbar)`
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  background-color: ${(props) => props.theme.colors.bg.primary};
  margin-bottom: ${(props) => props.theme.space[3]};
`;
export default function Search() {
  const { keyword, search } = useContext(LocationContext);
  const [searchQuery, setSearchQuery] = useState(keyword);
  return (
    <SearchContainer>
      <SearchBarCustom
        placeholder="Search for a location"
        onChangeText={setSearchQuery}
        onSubmitEditing={() => {
          search(searchQuery);
        }}
        value={searchQuery}
      />
    </SearchContainer>
  );
}
