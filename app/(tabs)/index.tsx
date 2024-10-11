import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { Link } from 'expo-router';
import ImageViewer from '@/components/imageViewer'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState,useRef } from 'react';
import { blue } from 'react-native-reanimated/lib/typescript/reanimated2/Colors';
import Ionicons from '@expo/vector-icons/Ionicons';


const placeholder = require('../../assets/images/background-image.png')
const camera = require('../../assets/images/diaphragm.png')
export default function Index() {
  const camRef = useRef(null)
  const [facing, setFacing] = useState<CameraType>('back');
  const [permission, requestPermission] = useCameraPermissions();
  const [isCameraReady, setIsCameraReady] = useState(false);
    
  

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={styles.message}>Permita a utilização da câmera</Text>
        <Button onPress={requestPermission} title="Permitir acesso" />
      </View>
    );
  }

  async function takePicture() {
    if(camRef.current){
      const data = await camRef.current.takePictureAsync();
      console.log(data)
    }
};
   

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }
  
  return (
    <View style={styles.container}>
      <CameraView
      ref={camRef}
    />
      <View style={styles.cameraContainer}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
            <Ionicons name="swap-horizontal" size={32} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.button1} onPress={takePicture}>
            <Ionicons name="camera-outline" size={32} />
          </TouchableOpacity>
        </View>
      </CameraView>
      </View>
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
    alignItems: 'flex-start',
  },
  button1: {
    flex: 1,
    justifyContent:'center',
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginRight:100
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

