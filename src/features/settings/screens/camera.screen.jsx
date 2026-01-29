import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useContext, useRef, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import styled from 'styled-components/native';
import { AuthenticationContext } from '../../../services/authentication/authentication.context';
const ProfileCamera = styled(CameraView)`
  width: 100%;
  height: 100%;
`;
const CameraControls = styled.View`
  flex: 1;
  background-color: transparent;
  flex-direction: row;
  position: absolute;
  width: 100%;
  /* align-items: flex-end; */
  /* justify-content: flex-start; */
  align-self: center;
  margin: 20px;
  bottom: 30px;
`;
const SnapButtonCircle = styled.TouchableOpacity`
  position: relative;
  margin-left: 42%;
  background-color: aliceblue;
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;
const CameraFlip = styled.TouchableOpacity`
  position: relative;
  align-items: center;
  margin-left: auto;
  margin-right: 20px;
  justify-content: center;
  background-color: rgba(52, 52, 52, 0.6);
  border-radius: 50%;
  height: 64px;
  width: 64px;
`;
export const CameraScreen = ({ navigation }) => {
  const [facing, setFacing] = useState('back');
  const { user } =useContext(AuthenticationContext)
  const cameraRef = useRef();
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  const snap = async () => {
    if (cameraRef) {
      const photo = await cameraRef.current.takePictureAsync();
      await AsyncStorage.setItem(`${user.uid}-profile_photo`, photo.uri);
      navigation.goBack();
    }
  };
  function toggleCameraFacing() {
    setFacing((current) => (current === 'back' ? 'front' : 'back'));
  }
  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  return (
    <ProfileCamera ref={cameraRef} facing={facing}>
      <CameraControls>
        <SnapButtonCircle title="Take Picture" onPress={snap} />
        <CameraFlip onPress={toggleCameraFacing}>
          <Ionicons name={'camera-reverse'} size={32} color="white" />
        </CameraFlip>
      </CameraControls>
    </ProfileCamera>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 64,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    width: '100%',
    paddingHorizontal: 64,
  },
  button: {
    flex: 1,
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});
