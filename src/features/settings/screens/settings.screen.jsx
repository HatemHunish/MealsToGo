
import { useContext } from 'react';
import { Avatar, List } from 'react-native-paper';
import styled from 'styled-components/native';
import { Spacer } from '../../../components/spacer/spacer.component';
import { Text } from '../../../components/typography/text.component';
import { SafeAreaContainer } from '../../../components/utility/safe-area.component';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
const SettingsItem= styled(List.Item)`
  padding: ${(props) => props.theme.space[2]};
`;
const AvaterContainer= styled.View`
  align-items: center;
  /* margin-top:20px; */
  margin-bottom: ${(props) => props.theme.space[2]};
`;
const SettingsScreen = ({navigation}) => {
  const { onLogout,user } = useContext(AuthenticationContext);
  console.log("User info:",user.email);
  return (
    <SafeAreaContainer>
      <AvaterContainer>
      <Avatar.Icon
        size={120}
        icon="account-outline"
        backgroundColor={'#2182BD'}
      />
      <Spacer position={"top"} size={"large"}>
      <Text variant="label">{user.email}</Text>
      </Spacer>
      </AvaterContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={()=>navigation.navigate("FavouritesScreen")  }
          left={(props) => <List.Icon {...props} icon="heart" color='black' />}
        />  
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} icon="door" color='black' />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaContainer>
  );
};

export default SettingsScreen;
