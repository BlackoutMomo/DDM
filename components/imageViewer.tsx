import { StyleSheet } from "react-native";
import { Image } from "expo-image";

type Props = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}

const styles = StyleSheet.create({
  image: {
    marginTop:45,
    width: 400,
    height: 580,
    borderRadius: 18,
  },
});