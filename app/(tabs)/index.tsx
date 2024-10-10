import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import ImageViewer from '@/components/imageViewer'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';


const placeholder = require('../../assets/images/background-image.png')
const camera = require('../../assets/images/diaphragm.png')
export default function Index() {

  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Precisamos da permissão para utilizarmos a câmera</Text>
        <Button onPress={requestPermission} title="Permitir acesso" />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={styles.container}>
      <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Text style={styles.textCamera}>Flip Camera</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
      </View>
      <Text style={styles.text}>Tirar Foto</Text>
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    textAlign: 'center',
    
  },
  message: {
    textAlign: 'center',
    paddingBottom: 10,
  },
  cameraContainer:{
    flex: 1,
    justifyContent: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    margin: 64,
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
  },

  textCamera: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
});