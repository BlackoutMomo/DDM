import { StyleSheet, View, Pressable, Text } from 'react-native';
import {Image} from 'expo-image'

type Props = {
  imgSource: string;
};

export default function Button({ imgSource }: Props) {
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Voce tirou foto')}>
        <Image source={imgSource} style={styles.image} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop:70,
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image:{

    height:60,
    width:60
  }
});
