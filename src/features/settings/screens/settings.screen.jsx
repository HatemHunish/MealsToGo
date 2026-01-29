
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import { useContext, useState } from 'react';
import { TouchableOpacity } from 'react-native';
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
  const [profilePhoto, setProfilePhoto] = useState(null);

  const loadProfilePhoto = async (user) => {
    const photoUri = await AsyncStorage.getItem(`${user.uid}-profile_photo`);
    setProfilePhoto(photoUri);
  };
  useFocusEffect(() => {
    loadProfilePhoto(user);
  });
  console.log("User info:",user.email);
  return (
    <SafeAreaContainer>
      <AvaterContainer>
        <TouchableOpacity onPress={() => navigation.navigate('CameraScreen')}>
          {!profilePhoto ? (
            <Avatar.Icon size={120} icon="human" backgroundColor="#2182BD" />
          ) : (
            <Avatar.Image size={120} source={{ uri: profilePhoto }} backgroundColor="#2182BD" />
          )}
        </TouchableOpacity>
        <Spacer position={'top'} size={'large'}>
          <Text variant="label">{user.email}</Text>
        </Spacer>
      </AvaterContainer>
      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          onPress={() => navigation.navigate('FavouritesScreen')}
          left={(props) => <List.Icon {...props} icon="heart" color="black" />}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} icon="door" color="black" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeAreaContainer>
  );
};

export default SettingsScreen;
